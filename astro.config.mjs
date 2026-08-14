import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://letrasyvocesdetabasco.github.io',
  base: '/letrasyvocesdetabasco',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  })]
});
