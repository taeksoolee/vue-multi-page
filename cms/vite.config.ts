import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig, UserConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = process.env.VITE_DEV !== '0';
  const publicDir = 'public';
  const buildDir = 'cms';
  const devServerPort = 3003;

  const config: UserConfig = {
    plugins: [
      vue(),
      ViteMinifyPlugin({
        removeComments: true,
        collapseWhitespace: true,
      }),
    ],
    resolve: {
      alias: {
        '@components': resolve(__dirname, '..', 'common', 'components'),
        '@utils': resolve(__dirname, '..', 'common', 'utils'),
        '@interfaces': resolve(__dirname, '..', 'common', 'interfaces'),
        [`@${buildDir}`]: resolve(__dirname, 'src'),
      },
    },
  };

  config.root = `./${buildDir}`;

  if (isDev) {
    config.server = {
      port: devServerPort,
    };

    config.plugins!.push(vueDevTools());
  } else {
    config.plugins!.push(
      viteStaticCopy({
        targets: [
          {
            src: `${publicDir}/*`,
            dest: '.',
          },
        ],
      })
    );

    config.build = {
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
        output: {
          entryFileNames: () => `assets/[name].[hash].js`,
        },
      },
    }
  }

  return config;
});
