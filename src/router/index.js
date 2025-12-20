import LoginView from '@/views/auth/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'auth' },
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('../views/Register.vue'),
    //   meta: { layout: 'auth' },
    // },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('../views/Admin.vue'),
    //   meta: { layout: 'admin' },
    // },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: () => import('../views/Blog.vue'),
    //   meta: { layout: 'blog' },
    // },
  ],
})

export default router
