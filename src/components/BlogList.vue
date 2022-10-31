<template>
  <div class="container row">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h4>Blog List</h4>
      <!-- <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul> -->
      <table class="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Tiêu đê</th>
            <th scope="col">Nội Dung</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Sửa lần cuối</th>
            <th scope="col">Số lượng bình luận</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(blog, index) in blogs" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td><img width="30" :src="blog.image.url" alt="image"></td>
            <td>{{ blog.title }}</td>
            <td>{{ blog.content }}</td>
            <td>{{ blog.created_at }}</td>
            <td>{{ blog.updated_at }}</td>
            <td>{{ blog.comments_count }}</td>
          </tr>
        </tbody>
      </table>
      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button> -->
    </div>
    <!-- <div class="col-md-6">
      <div v-if="currentTutorial.id">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <router-link
          :to="'/tutorials/' + currentTutorial.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogDataService from "@/services/BlogDataService";
import Blog from "@/types/Blog";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "tutorials-list",
  data() {
    return {
      blogs: [] as Blog[],
      currentTutorial: {} as Blog,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    async retrieveTutorials() {
      try {
        const res = await BlogDataService.getAll();
        this.blogs = Object.freeze(res.data.data.items);
        console.log(this.blogs);
      } catch (e: any) {
        console.error(e);
      }
    },

    // refreshList() {
    //   this.retrieveTutorials();
    //   this.currentTutorial = {} as Tutorial;
    //   this.currentIndex = -1;
    // },

    // setActiveTutorial(tutorial: Tutorial, index = -1) {
    //   this.currentTutorial = tutorial;
    //   this.currentIndex = index;
    // },

    // removeAllTutorials() {
    //   TutorialDataService.deleteAll()
    //     .then((response: ResponseData) => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch((e: Error) => {
    //       console.log(e);
    //     });
    // },

    // searchTitle() {
    //   TutorialDataService.findByTitle(this.title)
    //     .then((response: ResponseData) => {
    //       this.tutorials = response.data;
    //       this.setActiveTutorial({} as Tutorial);
    //       console.log(response.data);
    //     })
    //     .catch((e: Error) => {
    //       console.log(e);
    //     });
    // },
  },
  mounted() {
    this.retrieveTutorials();
  },
});
</script>
