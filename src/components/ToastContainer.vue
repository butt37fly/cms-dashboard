<script setup>
import { storeToRefs } from 'pinia'
import { useToastStore } from '@/stores/toast'
import ToastItem from './ToastItem.vue'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)
</script>

<template>
  <section class="fixed bottom-4 right-4 z-50 flex w-3/12 flex-col gap-1">
    <ToastItem
      v-for="toast in toasts"
      :key="toast.id"
      :type="toast.type"
      :message="toast.message"
    />
  </section>
</template>
