import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/topics' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    kicker: z.string(),
    tension: z.string(),
    summary: z.string(),
    reading: z.string().default('8 min'),
  }),
});

export const collections = { topics };
