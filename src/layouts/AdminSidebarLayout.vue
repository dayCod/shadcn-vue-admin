<script setup>
import { IconDashboard, IconDatabase, IconInnerShadowTop, IconTag } from '@tabler/icons-vue'

import NavUser from '@/components/nav/NavUser.vue'

import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar'

import Separator from '@/components/ui/separator/Separator.vue'
import NavHeader from '@/components/nav/NavHeader.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import { inject } from 'vue'

const user = inject('authUser')

const data = {
  user: {
    name: user.name,
    email: user.email,
    avatar: user.avatar ?? '/avatars/shadcn.jpg',
  },
}

const menu = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: IconDashboard,
  },
  {
    title: 'Master Data',
    icon: IconDatabase,
    children: [
      {
        title: 'Tags',
        url: '/admin/master/tags',
        icon: IconTag,
      },
    ],
  },
]
</script>

<template>
  <Sidebar collapsible="offcanvas">
    <NavHeader title="Acme Inc">
      <template #icon>
        <IconInnerShadowTop class="size-4" />
      </template>
    </NavHeader>
    <Separator />

    <SidebarContent>
      <NavMenu :items="menu" />
    </SidebarContent>

    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
  </Sidebar>
</template>
