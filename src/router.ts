import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/BlogList.vue"),
  },
  {
    path: "/blog/:id",
    name: "tutorial-details",
    component: () => import("./components/BlogDetail.vue"),
  },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddTutorial.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
