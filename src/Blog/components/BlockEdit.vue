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
            :disabled="$route.query?.showDetail"
            label="Tiêu đề của bài viết"
            outlined
            v-model="blog.title"
            :rules="ruleRequired('Tiêu đề của bài viết')"
          ></v-text-field>
        </div>
        <div class="mt-5">
          <v-textarea
            :disabled="$route.query?.showDetail"
            outlined
            name="input-7-4"
            label="Nội Dung"
            v-model="blog.content"
            :rules="ruleRequired('Nội Dung')"
          ></v-textarea>
        </div>
        <div v-if="!$route.query?.showDetail" class="wrapButton">
          <v-btn
            depressed
            color="primary"
            @click="updateData"
          >
            Cập Nhật
          </v-btn>
        </div>
        
      </div>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogDataService from "@/services/BlogDataService";
import Blog from "@/types/Blog";
import {ValidationObserver, ValidationProvider} from "vee-validate";

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class BlockEdit extends Vue {
  blog = {} as Blog;
  imager = null; // handle change image
  ruleRequired(field: string) {
    return [
    (v: string) => !!v || `${field} không được bỏ trống`
    ]
  }
  mount() {
    this.onButtonClick();
  }
  onButtonClick() {
    // @ts-expect-error xóa lỗi
    this.$refs.uploader.click();
  }
  updateData() {
    const data = {
      id: this.blog.id,
      title: this.blog.title,
      content: this.blog.content,
      image: {
        url: this.blog.image.url
      },
      created_at: this.blog.created_at,
      updated_at: this.blog.updated_at,
      comments_count: this.blog.comments_count
    }
    BlogDataService.update(Number(this.$route.params?.id), data)
      .then((response) => {
        this.blog = response.data.data;
        console.log(this.blog);
      })
      .catch((errors) => {
        console.log(errors);
      });
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
