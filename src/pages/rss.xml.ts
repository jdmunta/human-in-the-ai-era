import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const topics = (await getCollection('topics')).sort(
    (a, b) => a.data.order - b.data.order
  );

  return rss({
    title: 'Human in the AI Era',
    description:
      'A working argument about meaning, purpose, curiosity, judgment and responsibility when cognition is outsourced to machines.',
    site: context.site!,
    items: topics.map((t) => ({
      title: t.data.title,
      description: `${t.data.tension} — ${t.data.summary}`,
      link: `/topics/${t.id}/`,
      categories: [t.data.kicker],
    })),
    customData: '<language>en</language>',
  });
}
