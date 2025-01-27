// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import metaTags from 'astro-meta-tags';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
    site: 'https://minarox.fr',
    integrations: [sitemap(), partytown(), metaTags(), compressor()]
});