<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Counter from '@web/components/Counter.vue';

useHead({
  title: 'Home Page in Web',
  meta: [
    { name: 'description', content: 'description for web', },
    { name: 'keywords', content: 'vue, vue3, typescript', },
    { name: 'author', content: 'taeksoolee', },
    { name: 'robots', content: 'index, follow', },
    { name: 'revisit-after', content: '1 days', },
    { name: 'language', content: 'Korean', },

    { property: 'og:type', content: 'website', },
    { property: 'og:url', content: 'https://vuejs.org/', },
    { property: 'og:title', content: 'Home Page in Web', },
    { property: 'og:image', content: 'https://cdn.prod.website-files.com/62865614b39c464b76d339aa/6634129dd4caaf0cbfc2d310_Vue-original.svg', },
    { property: 'og:description', content: 'description for web', },
    { property: 'og:site:name', content: 'web', },
    { property: 'og:locale', content: 'ko_KR', },
    { property: 'og:image:width', content: '1200', },
    { property: 'og:image:height', content: '630', },

    { property: 'twitter:card', content: 'summary_large_image', },
    { property: 'twitter:title', content: 'Home Page in Web', },
    { property: 'twitter:description', content: 'description for web', },
    { property: 'twitter:image', content: 'https://cdn.prod.website-files.com/62865614b39c464b76d339aa/6634129dd4caaf0cbfc2d310_Vue-original.svg', },
  ],
});
</script>

<template>
  <h2>Home Page</h2>
  
  <Counter></Counter>
</template>