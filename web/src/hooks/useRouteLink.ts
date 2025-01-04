import { storeToRefs } from 'pinia';
import { useBootStore } from '@web/store';
import { isLocal } from '@utils/is'

/**
 * route-link helper
 */
export const useRouteLink = () => {
  const bootStore = useBootStore();
  const { mode } = storeToRefs(bootStore);

  const createLinkPath = (path: string) => {
    if (mode.value === 'development' || isLocal) {
      return path;
    }

    if (path === '/') {
      return path;
    } else {
      return path + '.html';
    }
  }

  return {
    createLinkPath,
  }
}