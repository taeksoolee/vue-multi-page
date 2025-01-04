<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useRouterLink } from './hooks/useRouterLink';
import { computed } from 'vue';

const { createLinkPath } = useRouterLink();

const router = useRouter();

const isNotFound = computed(() => !!router.currentRoute.value.meta.isNotFound);
</script>

<template>
  <header>
    <h1>Web</h1>
  </header>

  <nav v-if="!isNotFound">
    <ul>
      <li><a href="//localhost:3002">Admin</a></li>
      <li><a href="//localhost:3003">CMS</a></li>
    </ul>
    <hr />
    <ul>
      <li><router-link :to="{path: createLinkPath('/')}">Home</router-link></li>
      <li><router-link :to="{path: createLinkPath('/about')}">About</router-link></li>
      <li><router-link :to="{path: createLinkPath('/my')}">My</router-link></li>
    </ul>
  </nav>

  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
ul {
  display: flex;
  gap: 4px;
  list-style: none;
}
a {
  padding: 20px;
}
a.router-link-active {
  border: 1px solid red;
}
</style>