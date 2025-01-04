import { createMemoryHistory, createWebHistory, type RouteRecordRaw } from "vue-router";
import { isServer } from "@utils/is";
import type { Mode } from "@interfaces/types";

export const createSSGRouteRecordRawSet: (name: string, path: string, component: any, mode?: Mode) => RouteRecordRaw[] = (name, path, component, mode) => {
  if (isServer || mode === 'local') {
    return [{ name, path, component },];
  }

  const htmlPath = path === '/' ? '/' : path + '.html';

  const results: RouteRecordRaw[] = [ { name, path: htmlPath, component }, ];

  return results;
};

export const mergeRouteRecordRawSets: (routeRecordRawSets: RouteRecordRaw[][]) => RouteRecordRaw[] = (routeRecordRawSets) => {
  return routeRecordRawSets.reduce<RouteRecordRaw[]>((acc, routeRecordRawSet) => {
    return acc.concat(routeRecordRawSet);
  }, []);
}

export const createRouteRecordRawSet: (name: string, path: string, component: any) => RouteRecordRaw[] = (name, path, component) => {
  return [{ name, path, component },];
};

export const getHistory = () => {
  return createWebHistory();
}

export const getSSGHistory = () => {
  return isServer ? createMemoryHistory() : createWebHistory();
}