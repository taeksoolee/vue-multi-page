import { createRouter } from 'vue-router';
import { createRouteRecordRawSet, getHistory, mergeRouteRecordRawSets } from '@utils/route';

import HomePage from '@cms/pages/HomePage.vue';
import AboutPage from '@cms/pages/AboutPage.vue';
import ProfilePage from '@cms/pages/ProfilePage.vue';

export const routes = mergeRouteRecordRawSets([
  createRouteRecordRawSet('home', '/', HomePage),
  createRouteRecordRawSet('about', '/about', AboutPage),
  createRouteRecordRawSet('profile', '/profile', ProfilePage),
  [ { path: '/:pathMatch(.*)*', redirect: '/' }, ],
]);

export const router = createRouter({
  history: getHistory(),
  routes,
});