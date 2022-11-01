import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlockEdit from '@/components/Blog/BlockEdit.vue'
import machineRoutes from '@/Blog/router';

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  ...machineRoutes
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
