<template>
  <hello-world />
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from '@/Blog/views/BlockTable.vue'

  export default Vue.extend({
    name: 'home-view',

    components: {
      HelloWorld,
    },
  })
</script>
