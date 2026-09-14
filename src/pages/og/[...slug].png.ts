import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { renderCard } from '../../lib/og';

/** Truncate on a word boundary so cards never end mid-word. */
function clamp(s: string, n: number) {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:—-]$/, '') + '…';
}

export async function getStaticPaths() {
  const topics = await getCollection('topics');

  const essays = topics.map((t) => ({
    params: { slug: t.id },
    props: {
      eyebrow: `${String(t.data.order).padStart(2, '0')} · ${t.data.kicker}`,
      title: t.data.title,
      blurb: clamp(t.data.tension, 210),
      footRight: `${t.data.reading} read`,
    },
  }));

  const pages = [
    { slug: 'default', eyebrow: 'A working argument · eleven essays',
      title: 'Human in the AI Era',
      blurb: 'Cognitive offloading is ancient. Outsourcing judgment about what is worth thinking about is new.' },
    { slug: 'playbook', eyebrow: 'The Playbook · 47 practices',
      title: 'Everything the essays ask you to do',
      blurb: 'Every practice from all eleven essays in one filterable list, by cadence and by topic.' },
    { slug: 'audit', eyebrow: 'Self-assessment · 15 questions',
      title: 'Cognitive Autonomy Audit',
      blurb: 'Judgment, curiosity, skill retention, accountability and presence. It returns a shape, not a score.' },
    { slug: 'ladder', eyebrow: 'The framework',
      title: 'The Delegation Ladder',
      blurb: 'Five rungs from cede to reserve — a rubric for what to hand to a machine and what to keep.' },
    { slug: 'judging', eyebrow: 'The instrument · 23 questions',
      title: 'What to ask when you are judging',
      blurb: 'Staged from framing to accountability, and scaled to whether the decision is reversible and whether a mistake would announce itself.' },
    { slug: 'glossary', eyebrow: 'Reference · 25 terms',
      title: 'The concepts, defined',
      blurb: 'The verification gap, the jagged frontier, moral crumple zones, desirable difficulty, phronesis.' },
  ].map((p) => ({ params: { slug: p.slug }, props: p }));

  return [...essays, ...pages];
}

export async function GET({ props }: APIContext) {
  const png = await renderCard(props as any);
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
