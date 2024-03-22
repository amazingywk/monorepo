import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/container',
    },
    {
      path: '/container',
      name: 'container',
      component: () => import('../pages/container/index.vue'),
    },
  ],
});

export default router;
