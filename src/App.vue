<script setup>
import { useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import { computed } from 'vue'
import AdminLayout from './layouts/AdminLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue'
import { Toaster } from 'vue-sonner'

const route = useRoute()

const layouts = {
  auth: AuthLayout,
  admin: AdminLayout,
  blog: BlogLayout,
}

const layout = computed(() => layouts[route.meta.layout] || layouts.blog)
</script>

<template>
  <Toaster position="top-right" richColors />
  <component :is="layout">
    <router-view />
  </component>
</template>
