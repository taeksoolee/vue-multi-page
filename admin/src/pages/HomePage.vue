<script setup lang="ts">
import { ref } from 'vue';
import { add } from '@utils/math';
import HelloVue from '@components/Hello.vue';
import HelloAdminVue from '@admin/components/HelloAdmin.vue';

const title = ref('Hello');
const result = ref(add(1, 2));
</script>

<template>
  <h2>Home Page</h2>
  <h3>{{ title }}</h3>
  <p>add result : {{ result }}</p>
  <HelloVue />
  <HelloAdminVue />
</template>