import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import type { Plugin } from 'vite';
import path from 'path';

export default defineConfig({
  // build: {
  //   commonjsOptions: {
  //     include: ['tailwind-config.js', 'node_modules/**'],
  //   },
  // },

  // optimizeDeps: {
  //   include: ['tailwind-config'],
  // },

  plugins: [
    vue(),
    {
      name: 'postcss',
      async transform(code: string, id: string): Promise<{ code: string; map?: string }> {
        if (id.endsWith('.css')) {
          const result = await postcss([tailwindcss, autoprefixer]).process(code, {
            from: id,
          });
          return {
            code: result.css,
            map: result.map?.toString(),
          };
        }
        return {
          code,
        };
      },
    } as Plugin,
  ],

  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //     'tailwind-config': path.resolve(__dirname, './tailwind.config.js'),
  //   },
  // },
});
