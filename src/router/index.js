import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../pages/ServicesPage.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: import('../pages/404Page.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
