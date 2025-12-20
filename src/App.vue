<script setup>
import { useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import { computed } from 'vue'
import AdminLayout from './layouts/AdminLayout.vue'
import BlogLayout from './layouts/BlogLayout.vue'

const route = useRoute()

const layouts = {
  auth: AuthLayout,
  admin: AdminLayout,
  blog: BlogLayout,
}

const layout = computed(() => layouts[route.meta.layout] || layouts.blog)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
