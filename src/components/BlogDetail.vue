<template>
  <div class="edit-form">
    <h4>Blog</h4>
    <button type="submit" class="badge badge-success" @click="updateTutorial">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogDataService from "@/services/BlogDataService";
import Blog from "@/types/Blog";

export default defineComponent({
  name: "tutorial",
  data() {
    return {
      currentBlog: {} as Blog,
      message: "",
    };
  },
  methods: {
    async getBlock(id: string | string[]) {
      const params = Number(id);
      const res = await BlogDataService.get(params);
      this.currentBlog = Object.freeze(res.data.data.items);
      console.log('this.currentBlog', this.currentBlog);
    },

    //   updatePublished(status: boolean) {
    //     let data = {
    //       id: this.currentTutorial.id,
    //       title: this.currentTutorial.title,
    //       description: this.currentTutorial.description,
    //       published: status,
    //     };

    //     BlogDataService.update(this.currentTutorial.id, data)
    //       .then((response: ResponseData) => {
    //         console.log(response.data);
    //         this.currentTutorial.published = status;
    //         this.message = "The status was updated successfully!";
    //       })
    //       .catch((e: Error) => {
    //         console.log(e);
    //       });
    //   },

    //   updateTutorial() {
    //     BlogDataService.update(this.currentTutorial.id, this.currentTutorial)
    //       .then((response: ResponseData) => {
    //         console.log(response.data);
    //         this.message = "The tutorial was updated successfully!";
    //       })
    //       .catch((e: Error) => {
    //         console.log(e);
    //       });
    //   },

    //   deleteTutorial() {
    //     BlogDataService.delete(this.currentTutorial.id)
    //       .then((response: ResponseData) => {
    //         console.log(response.data);
    //         this.$router.push({ name: "tutorials" });
    //       })
    //       .catch((e: Error) => {
    //         console.log(e);
    //       });
    //   },
  },
  mounted() {
    this.getBlock(this.$route.params?.id);
  },
});
</script>
