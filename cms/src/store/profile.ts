import { ref } from "vue";
import { defineStore } from "pinia";
import type { Profile } from "@cms/interfaces/profile";

export const useProfileStore = defineStore('profile', () => {
  const isLoading = ref(false);

  const data = ref<Profile | null>(null);

  const fetch = async () => {
    isLoading.value = true;
    data.value = await new Promise<Profile>((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Taeksoolee',
        });
      }, 1000);
    });
    isLoading.value = false;
  }

  return {
    isLoading,
    data,
    fetch,
  };
});