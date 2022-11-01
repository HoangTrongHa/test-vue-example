<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="cursor-pointer" @click="$router.push({ name: 'block-list' })">
      Trang Chủ
    </div>
  </v-app-bar>
  </div>
</template>