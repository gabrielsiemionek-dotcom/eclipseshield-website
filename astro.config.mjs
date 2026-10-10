// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eclipseshield.co.uk',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'always',
  },
});
