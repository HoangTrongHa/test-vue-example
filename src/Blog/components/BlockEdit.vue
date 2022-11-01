<template>
  <div>
    <v-container>
      <div class="wrapProfile">
        <h1>Chi Tiết Bài Đăng</h1>
        Bấm Vào ảnh để thay đổi ảnh mới
        <div class="mt-5">
          <v-avatar size="300">
            <img class="cursor-pointer" :src="blog.image.url" @click="onButtonClick()" />
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
              @change="onFileChange"
            />
          </v-avatar>
        </div>
        <div class="mt-5">
          <v-text-field
            label="Full Name"
            outlined
            v-model="blog.title"
          ></v-text-field>
        </div>
        <div class="mt-5">
          <v-textarea
            outlined
            name="input-7-4"
            label="Nội Dung"
            v-model="blog.content"
          ></v-textarea>
        </div>
        <div class="wrapButton">
          <v-btn
            depressed
            color="primary"
          >
            Cập Nhật
          </v-btn>
        </div>
        <!-- <div class="wrapAvatar">
          <v-avatar size="300" class="wrapAvatarItem">
            <img :src="item.avatar" @click="onButtonClick()" />
            <input
              ref="uploader"
              class="d-none"
              type="file"
              accept="image/*"
              @change="onFileChange"
            />
          </v-avatar>
        </div>
        <div class="wrapInfoProfile">
          <v-text-field
            label="Full Name"
            outlined
            v-model="item.name"
          ></v-text-field>
        </div>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              label="AGE"
              outlined
              v-model="item.old"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Part"
              outlined
              v-model="item.part"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              :items="itemsStatus"
              label="Status"
              outlined
              v-model="item.status"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              :items="itemsPosition"
              label="Postion"
              outlined
              v-model="item.position"
            ></v-select>
          </v-col>
          <div class="wrapButton">
            <v-btn 
              elevation="8" 
              @click="saveData"
            > Update Profile </v-btn>
          </div>
        </v-row> -->
      </div>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogDataService from "@/services/BlogDataService";
import Blog from "@/types/Blog";

@Component
export default class BlockEdit extends Vue {
  blog: Blog[] = [];
  imager = null; // handle change image
  mount() {
    this.onButtonClick();
  }
  onButtonClick() {
    // @ts-expect-error xóa lỗi
    this.$refs.uploader.click();
  }

  // convert image to base 64
  onFileChange(e: any) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.imager = files[0];
    let imgName = files[0].name;
    console.log(imgName);
    if (imgName.lastIndexOf(".") <= 0) {
      return;
    }
    const fr = new FileReader();
    fr.readAsDataURL(files[0]);
    fr.addEventListener("load", () => {
      // @ts-expect-error xóa lỗi nó có thể null
      this.blog.image.url = fr.result;
    });
  }
  created() {
    BlogDataService.get(Number(this.$route.params?.id))
      .then((response) => {
        this.blog = response.data.data;
        console.log(this.blog);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>