import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://syuancheng.github.io',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
