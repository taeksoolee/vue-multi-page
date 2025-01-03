<script setup lang="ts">
import { ref } from 'vue';
import HelloVue from '@components/Hello.vue';
import HelloAdminVue from '@admin/components/HelloAdmin.vue';
import { add } from '@utils/math';

const title = ref('Hello');

const b = ref(add(1, 2));
</script>

<template>
  <h1>Admin</h1>
  <h2>{{ title }}</h2>
  <p>add result : {{ b }}</p>
  <HelloVue />
  <HelloAdminVue />
</template>