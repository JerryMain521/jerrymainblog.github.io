// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://jerrymain521.github.io',
  base: '/website',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    // 代码高亮 Astro 默认用 Shiki，这里可以指定主题
    shikiConfig: {
      theme: 'github-dark',  // 或 'github-light'、'one-dark-pro' 等
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  }
});