import { createApp } from 'vue';
import App from '@admin/App.vue';
import { router } from '@admin/routes';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');