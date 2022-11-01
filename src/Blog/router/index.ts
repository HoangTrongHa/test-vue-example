import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'block-list',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/block-list',
    name: 'block-list',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/block-edit/:id',
    name: 'block-edit',
    component: () => import('@/Blog/components/BlockForm.vue')
  },
  {
    path: '/block-add',
    name: 'block-add',
    component: () => import('@/Blog/components/BlockForm.vue')
  }
];

export default routes;
