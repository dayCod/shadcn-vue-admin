import { authRoutes } from './parts/authRoutes'
import { adminRoutes } from './parts/adminRoutes'
import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import { useAuthStore } from '@/stores/auth/AuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, ...adminRoutes],
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    nProgress.start()
  }

  const authStore = useAuthStore()
  const user = authStore.getUser()
  const isAuthenticated = user && Object.keys(user).length > 0

  if (to.meta.requiresAuth === false && isAuthenticated) {
    next('/admin')
  } else if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach(() => {
  nProgress.done()
})

export default router
