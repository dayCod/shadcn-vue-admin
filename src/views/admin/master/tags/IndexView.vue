<script setup>
import { h } from 'vue'
import Datatable from '@/components/Datatable.vue'
import { ArrowUpDown, Edit, PlusIcon, Trash2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'

const data = [
  { id: '1', amount: 100, status: 'pending', email: 'm@example.com' },
  { id: '2', amount: 200, status: 'success', email: 'test@example.com' },
]

const columns = [
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })],
      )
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('status')),
  },
  {
    accessorKey: 'action',
    header: () => h('div', { class: 'text-right' }, 'Action'),
    cell: ({ row }) => {
      return h('div', { class: 'flex gap-2 justify-end' }, [
        h(
          Button,
          {
            onClick: () => console.log(row.original.id),
          },
          () => [h(Edit)],
        ),
        h(
          Button,
          {
            variant: 'destructive',
            onClick: () => console.log(row.original.id),
          },
          () => [h(Trash2)],
        ),
      ])
    },
  },
]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <span>Tags Data</span>
        <Button variant="outline">
          <PlusIcon />
          Create Tags
        </Button>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <Datatable :data="data" :columns="columns" />
    </CardContent>
  </Card>
</template>
