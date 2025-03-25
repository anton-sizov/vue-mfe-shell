import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/vue-mfe1",
      name: "vue-mfe1",
      component: () => import('vue-mfe1/App'),
    },
  ],
});

export default router;