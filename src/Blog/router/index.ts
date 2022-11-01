import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'block-list',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/block-edit/:id',
    name: 'block-edit',
    component: () => import('@/Blog/components/BlockEdit.vue')
  }
];

export default routes;
