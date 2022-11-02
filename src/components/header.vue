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
    <div class="cursor-pointer ml-5" @click="$router.push({ name: 'block-add' })">
      Thêm mới
    </div>
  </v-app-bar>
  </div>
</template>