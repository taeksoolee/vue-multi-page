<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProfileStore } from '@cms/store/profile';


const profileStore = useProfileStore();
const { data, isLoading } = storeToRefs(profileStore);

onMounted(() => {
  profileStore.fetch();
});
</script>

<template>
  <h2>Profile Page</h2>
  <p v-if="isLoading">Loading...</p>
  <p v-else>{{ data?.name }}</p>
</template>