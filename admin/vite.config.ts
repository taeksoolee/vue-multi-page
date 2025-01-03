import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3002,
  },
  root: process.env.VITE_ROOT,
  publicDir: resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@components': resolve(__dirname, '..', 'common', 'components'),
      '@utils': resolve(__dirname, '..', 'common', 'utils'),
      '@admin': resolve(__dirname, 'src'),
    },
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        admin: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: ({ name }) => `${name}/assets/[name].[hash].js`,
      },
    },
  },
});
