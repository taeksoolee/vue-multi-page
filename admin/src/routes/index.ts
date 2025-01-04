import { createRouter } from 'vue-router';
import { createRouteRecordRawSet, getHistory, mergeRouteRecordRawSets } from '@utils/route';

import HomePage from '@admin/pages/HomePage.vue';
import AboutPage from '@admin/pages/AboutPage.vue';
import ProfilePage from '@admin/pages/ProfilePage.vue';

export const routes = mergeRouteRecordRawSets([
  createRouteRecordRawSet('home', '/', HomePage),
  createRouteRecordRawSet('about', '/about', AboutPage),
  createRouteRecordRawSet('profile', '/profile', ProfilePage),
]);

export const router = createRouter({
  history: getHistory(),
  routes,
});