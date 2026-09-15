#!/usr/bin/env node
/**
 * Generate src/data/changelog.json from real git history.
 *
 * Run locally and commit the result — the build host may do a shallow clone,
 * so the site must not depend on git being present at build time.
 *   npm run changelog
 */
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const SEP = '␟';
const raw = execSync(
  `git log --date=short --pretty=format:"%H${SEP}%ad${SEP}%s" --name-only`,
  { encoding: 'utf8' }
);

const commits = [];
let current = null;
for (const line of raw.split('\n')) {
  if (line.includes(SEP)) {
    const [hash, date, subject] = line.split(SEP);
    current = { hash: hash.slice(0, 7), date, subject, files: [] };
    commits.push(current);
  } else if (line.trim() && current) {
    current.files.push(line.trim());
  }
}

const essay = (f) => f.match(/^src\/content\/topics\/(.+)\.mdx$/)?.[1] ?? null;
const page  = (f) => f.match(/^src\/pages\/(.+)\.astro$/)?.[1] ?? null;

const entries = commits
  .filter((c) => c.files.length)
  .map((c) => ({
    hash: c.hash,
    date: c.date,
    subject: c.subject,
    essays: [...new Set(c.files.map(essay).filter(Boolean))].sort(),
    pages: [...new Set(c.files.map(page).filter(Boolean))]
      .filter((p) => !p.startsWith('og/'))
      .sort(),
    files: c.files.length,
  }));

// When each essay first appeared, and when it was last touched.
const essayHistory = {};
for (const e of [...entries].reverse()) {
  for (const slug of e.essays) {
    essayHistory[slug] ??= { added: e.date, updated: e.date, revisions: 0 };
    essayHistory[slug].updated = e.date;
    essayHistory[slug].revisions += 1;
  }
}

writeFileSync(
  'src/data/changelog.json',
  JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), entries, essayHistory }, null, 2) + '\n'
);
console.log(`changelog: ${entries.length} commits, ${Object.keys(essayHistory).length} essays tracked`);
