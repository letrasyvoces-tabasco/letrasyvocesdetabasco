import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://letrasyvocesdetabasco.org',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  })]
});
