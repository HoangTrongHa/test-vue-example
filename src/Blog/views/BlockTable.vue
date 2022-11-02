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
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex">
          <v-btn
            tile
            color="primary"
            class="mx-2"
            @click="$router.push({ 
              name: 'block-edit', 
              params: { id: item.id }, 
              query: { showDetail: true } 
            })"
          >
            <v-icon left>
              mdi-send
            </v-icon>
            Chi Tiết
          </v-btn>
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
            color="error"
            @click="prepareDelete(item.id)"
          >
            <v-icon left>
              mdi-delete-outline
            </v-icon>
            Xoá
          </v-btn>
        </div>
      </template>
    </v-data-table>
    <!-- pagination -->
    <div class="text-center mt-5">
      <v-pagination
        v-model="page"
        :length="totalPage"
        circle
        :total-visible="7"
      ></v-pagination>
    </div>
    <ConfirmDelete
      :dialog="dialog"
      @update-dialog="dialog = $event"
      @confirm="onConfirm"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Blog from "@/types/Blog";
import BlogDataService from "@/services/BlogDataService";
import ConfirmDelete from "@/Blog/components/ConfirmDelete.vue"
@Component({
  components: {
    ConfirmDelete,
  },
})
export default class BlockList extends Vue {
  blogs: Blog[] = [];
  search = '';
  dialog = false;
  tempId = 0;
  page = 1;
  totalPage = 0;
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
  prepareDelete(id: number) {
    this.tempId = id;
    this.dialog = true;
  }
  onConfirm() {
    this.deleteItem(this.tempId);
  }
  deleteItem(id: number) {
    BlogDataService.delete(id)
      .then((response) => {
        this.retrieveBlog();
        this.$toast.open({
          message: "Delete successfully",
          type: "success",
          duration: 5000,
          dismissible: true,
          position: "top-right",
        });
      })
      .catch((errors) => {
        console.error(errors);
      });
  }
  retrieveBlog() {
    this.$route.query.page ? this.page = Number(this.$route.query.page) : this.page = 1
    BlogDataService.getAll(this.page)
      .then((response) => {
        this.blogs = response.data.data.items;
        this.totalPage = response.data.pagination.total;
      })
      .catch(console.log);
  }
  @Watch('page')
  changed(newVal: number) {
    this.$route.query.page = newVal.toString();
    this.retrieveBlog();
  }
  mounted() {
    this.retrieveBlog();
  }
}
</script>