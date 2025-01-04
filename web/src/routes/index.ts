import { createRouter } from 'vue-router';
import { mode } from '@utils/is';
import { createSSGRouteRecordRawSet, getSSGHistory, mergeRouteRecordRawSets } from '@utils/route';

import HomePage from '@web/pages/HomePage.vue';
import AboutPage from '@web/pages/AboutPage.vue';
import MyPage from '@web/pages/MyPage.vue';

export const routes = mergeRouteRecordRawSets([
  createSSGRouteRecordRawSet('home', '/', HomePage, mode),
  createSSGRouteRecordRawSet('about', '/about', AboutPage, mode),
  createSSGRouteRecordRawSet('my', '/my', MyPage, mode),
]);

export const router = createRouter({
  history: getSSGHistory(),
  routes,
});