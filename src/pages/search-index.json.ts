import { getCollection } from 'astro:content';

/** Strip MDX down to searchable prose. */
function toText(mdx: string): string {
  const stripped = mdx
    .replace(/^---[\s\S]*?---/, '')            // frontmatter
    .replace(/^import .*$/gm, '')              // component imports
    .replace(/```[\s\S]*?```/g, ' ')           // code fences
    .replace(/<[^>]+>/g, ' ')                  // JSX + html tags
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links/images -> label
    .replace(/[#*_`>|]/g, ' ');                // markdown punctuation

  // Keep block boundaries as a visible separator so snippets don't run a
  // heading straight into the paragraph beneath it.
  return stripped
    .split(/\n{2,}/)
    .map((b) => b.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join(' · ');
}

/** github-slugger-compatible enough for the ids Astro emits on h2s. */
function slugify(t: string) {
  return t
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Split an essay body at its h2s, keeping each section's prose with its heading. */
function sectionsOf(mdx: string) {
  const parts = mdx.split(/^##\s+/m).slice(1);
  return parts.map((chunk) => {
    const nl = chunk.indexOf('\n');
    const heading = chunk.slice(0, nl < 0 ? undefined : nl).trim();
    return {
      heading,
      slug: slugify(heading),
      text: toText(chunk.slice(nl < 0 ? 0 : nl)),
    };
  });
}

export async function GET() {
  const topics = (await getCollection('topics')).sort(
    (a, b) => a.data.order - b.data.order
  );

  const docs = topics.map((t) => ({
    slug: t.id,
    order: t.data.order,
    title: t.data.title,
    kicker: t.data.kicker,
    summary: t.data.summary,
    reading: t.data.reading,
    headings: (t.body ?? '').match(/^##\s+(.+)$/gm)?.map((h) => h.replace(/^##\s+/, '')) ?? [],
    // Section-level entries so a hit can land on the right heading, not the page top.
    sections: sectionsOf(t.body ?? ''),
    intro: toText((t.body ?? '').split(/^##\s+/m)[0] ?? ''),
  }));

  // Non-essay pages worth finding too.
  const pages = [
    { slug: 'ladder', title: 'The Delegation Ladder', kicker: 'Framework',
      summary: 'Five rungs from cede to reserve, and how to choose one.', path: '/ladder' },
    { slug: 'journal', title: 'The journal', kicker: 'Tool',
      summary: 'A private, unassisted journal. A rotating question a day drawn from the essays, kept in your browser.', path: '/journal' },
    { slug: 'contrast', title: 'Human and machine, side by side', kicker: 'Diagrams',
      summary: 'Five diagrams: the two categories, the jagged frontier, error profiles, the verification gap, and where accountability can attach.', path: '/contrast' },
    { slug: 'map', title: 'The argument map', kicker: 'Reference',
      summary: 'How the thirteen essays depend on each other: which claim is load-bearing for which.', path: '/map' },
    { slug: 'read', title: 'The whole argument', kicker: 'Reference',
      summary: 'All thirteen essays on a single page, for reading offline, printing or saving as a PDF.', path: '/read' },
    { slug: 'you', title: 'Where you stand', kicker: 'Tool',
      summary: 'Your progress across the site: essays read, practices adopted, reflections answered, last audit. Local to your browser.', path: '/you' },
    { slug: 'reflect', title: 'Reflect', kicker: 'Tool',
      summary: 'Fifty-four questions to turn on yourself, one set per essay, answered privately in your browser.', path: '/reflect' },
    { slug: 'judging', title: 'The Judgment Checklist', kicker: 'Tool',
      summary: 'Twenty-three questions to ask when judging: framing, evidence, calibration, second-order effects and accountability.', path: '/judging' },
    { slug: 'playbook', title: 'The Playbook', kicker: 'Tool',
      summary: 'Every practice from all thirteen essays, filterable.', path: '/playbook' },
    { slug: 'audit', title: 'Cognitive Autonomy Audit', kicker: 'Tool',
      summary: 'Fifteen questions across judgment, curiosity, retention, accountability and presence.', path: '/audit' },
    { slug: 'glossary', title: 'Glossary', kicker: 'Reference',
      summary: 'The concepts the essays rely on, defined.', path: '/glossary' },
    { slug: 'about', title: 'About & method', kicker: 'Reference',
      summary: 'How the site argues, what it is uncertain about, and every source.', path: '/about' },
  ];

  return new Response(JSON.stringify({ docs, pages }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
