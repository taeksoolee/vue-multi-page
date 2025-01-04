import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@cms/App.vue';
import { router } from '@cms/routes';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');