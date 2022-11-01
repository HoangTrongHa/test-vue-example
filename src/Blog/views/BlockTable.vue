<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="blogs"
      item-key="name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:[`item.image`]="{ item }">
        <div>
          <v-img
            max-height="50"
            max-width="50"
            :src="item.image.url"
          ></v-img>
        </div>
      </template>
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex">
          <v-btn
            tile
            color="success"
            class="mx-2"
            @click="$router.push({ name: 'block-edit', params: { id: item.id } })"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            Sửa
          </v-btn>
          <v-btn
            tile
            color="error"
            class="mx-2"
          >
          <v-icon dark> mdi-delete-outline </v-icon>
            Xoá
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Blog from "@/types/Blog";
import BlogDataService from "@/services/BlogDataService";
@Component({})
export default class BlockList extends Vue {
  blogs: Blog[] = [];
  search!: string;
  headers = [
    {
      text: 'STT',
      align: 'start',
      sortable: false,
      value: 'id',
    },
    { text: 'Ảnh', value: 'image' },
    { text: 'Tiêu đề', value: 'title' },
    { text: 'Nội Dung', value: 'content' },
    { text: 'Ngày tạo', value: 'created_at' },
    { text: 'Sửa lần cuối', value: 'updated_at' },
    { text: 'Số lượng bình luận', value: 'comments_count' },
    { text: 'Hành Động', value: 'action' },
  ];
item: any;
  
  retrieveBlog() {
    BlogDataService.getAll()
      .then((response) => {
        console.log(response);
        this.blogs = response.data.data.items;
        console.log(response.data);
      })
      .catch(console.log);
  }
  mounted() {
    this.retrieveBlog();
  }
}
</script>