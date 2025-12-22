<script setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-for="item in items.slice(0, -1)" :key="item.id">
        <BreadcrumbLink :href="item.url">{{ item.name }}</BreadcrumbLink>
        <BreadcrumbSeparator v-if="items.length > 1" />
      </BreadcrumbItem>
      <BreadcrumbPage :href="items[items.length - 1].url">
        {{ items[items.length - 1].name }}
      </BreadcrumbPage>
    </BreadcrumbList>
  </Breadcrumb>
</template>
