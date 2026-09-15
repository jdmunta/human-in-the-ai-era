#!/usr/bin/env node
/**
 * A YAML scalar that begins with a quote is parsed as a quoted string, so any
 * text after the closing quote is a syntax error. This has bitten three essays
 * now; catch it before the build does.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/topics';
let bad = 0;

for (const file of readdirSync(dir).filter((f) => f.endsWith('.mdx'))) {
  const text = readFileSync(join(dir, file), 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) {
    console.error(`${file}: no frontmatter block`);
    bad++;
    continue;
  }
  for (const line of fm[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (!m) continue;
    const [, key, value] = m;
    const q = value[0];
    if ((q === '"' || q === "'") && !(value.endsWith(q) && value.length > 1)) {
      console.error(`${file}: "${key}" starts with ${q} but does not end with it — YAML will fail.`);
      console.error(`  ${value.slice(0, 72)}…`);
      bad++;
    }
  }
}

if (bad) {
  console.error(`\n${bad} frontmatter problem(s).`);
  process.exit(1);
}
console.log('frontmatter ok');
