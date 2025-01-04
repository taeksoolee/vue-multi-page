// import { createApp as createVueApp } from 'vue';
import { ViteSSG } from 'vite-ssg';
import App from '@web/App.vue';

import { router } from '@web/routes';
import { createPinia } from 'pinia';
import { useBootStore } from './store';

const isDev = import.meta.env.MODE === 'development';
const isLocal = import.meta.env.VITE_MODE === 'local';

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes, },
  async ({ app, router, isClient, initialState }) => {
    isClient;
    initialState;
    const pinia = createPinia();
    app.use(pinia);

    // if (import.meta.env.SSR) {
    //   initialState.pinia = pinia.state.value
    // } else {
    //   pinia.state.value = initialState.pinia || {}
    // }

    router.beforeEach(async (_to, _from, next) => {
      const bootStore = useBootStore(pinia);
      if (!bootStore.ready) {
        // perform the (user-implemented) store action to fill the store's state
        bootStore.initialize(isLocal ? 'local' : isDev ? 'development' : 'production');
        console.log('loaded pinia 🥕');
      }
      next();
    })
  }
);