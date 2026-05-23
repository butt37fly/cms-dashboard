<script setup>
import ButtonItem from './ButtonItem.vue'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  closeTitle: {
    type: String,
    default: 'Cerrar',
  },
})

const dialogRef = ref(null)

defineExpose({
  showModal() {
    dialogRef.value?.showModal()
  },
  closeModal() {
    dialogRef.value?.close()
  },
})
</script>

<template>
  <dialog ref="dialogRef" class="c-modal fixed flex w-9/12 flex-col gap-4 rounded border bg-white">
    <header class="border-b border-gray-300 p-3" v-if="props.title !== null">
      <h2 class="text-lg font-bold">
        {{ props.title }}
      </h2>
    </header>

    <slot name="conent" />

    <footer class="flex w-full flex-row items-center justify-end gap-2 p-3">
      <ButtonItem @click="dialogRef.close()" :title="props.closeTitle" type="danger" />
    </footer>
  </dialog>
</template>

<style scoped>
.c-modal {
  display: none;
}

.c-modal[open] {
  display: flex;
}

.c-modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
