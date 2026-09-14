// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://web-production-d8544.up.railway.app',
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'vitesse-light', wrap: true },
  },
  build: { format: 'directory' },
});
