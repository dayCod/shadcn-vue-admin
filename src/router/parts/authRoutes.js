import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import LoginView from '@/views/auth/LoginView.vue'

export const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { layout: 'auth', requiresAuth: false },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPasswordView,
    meta: { layout: 'auth', requiresAuth: false },
  },
]
