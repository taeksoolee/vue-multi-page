import { createRouter } from 'vue-router';
import { createSSGRouteRecordRawSet, getSSGHistory, mergeRouteRecordRawSets } from '@utils/route';

import NotFound from '@web/NotFound.vue';

import HomePage from '@web/pages/HomePage.vue';
import AboutPage from '@web/pages/AboutPage.vue';
import MyPage from '@web/pages/MyPage.vue';
import MyProfilePage from '@web/pages/MyProfilePage.vue';

export const routes = mergeRouteRecordRawSets([
  createSSGRouteRecordRawSet('home', '/', HomePage),
  createSSGRouteRecordRawSet('about', '/about', AboutPage),
  createSSGRouteRecordRawSet('my', '/my', MyPage),
  createSSGRouteRecordRawSet('my.profile', '/my/profile', MyProfilePage),
  createSSGRouteRecordRawSet('not-found', '/not-found', NotFound),
  [ {
    path: '/:pathMatch(.*)*', 
    component: NotFound,
    meta: {
      isNotFound: true,
    }
  }, ],
]);

export const router = createRouter({
  history: getSSGHistory(),
  routes,
});