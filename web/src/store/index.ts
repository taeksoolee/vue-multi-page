import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Mode } from '@interfaces/types';
acceptHMRUpdate;

export const useBootStore = defineStore('boot', () => {

  const ready = ref(false);
  const mode = ref<Mode>('production');

  const initialize = (initMode: Mode) => {
    mode.value = initMode;
    ready.value = true;
  }

  return {
    ready,
    mode,
    initialize,
  }
})