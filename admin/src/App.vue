<script setup lang="ts">
import { ref } from 'vue';
import HelloVue from '@components/Hello.vue';
import HelloWebVue from '@admin/components/HelloWeb.vue';
import { add } from '@utils/math';

const title = ref('Hello');

const b = ref(add(1, 2));
</script>

<template>
  <h1>Admin</h1>
  <h2>{{ title }}</h2>
  <p>add result : {{ b }}</p>
  <HelloVue />
  <HelloWebVue />
</template>