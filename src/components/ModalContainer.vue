<script setup>
import ButtonItem from './ButtonItem.vue'
import { ref, watch } from 'vue'

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

const model = defineModel()
const modalRef = ref(null)

const closeModal = () => {
  modalRef.value?.close()
  model.value = false
}

watch(model, (value) => {
  if (value) {
    modalRef.value?.showModal()
  } else {
    modalRef.value?.close()
  }
})
</script>

<template>
  <dialog ref="modalRef" class="c-modal fixed flex w-9/12 flex-col gap-4 rounded border bg-white">
    <header class="border-b border-gray-300 p-3" v-if="props.title !== null">
      <h2 class="text-lg font-bold">
        {{ props.title }}
      </h2>
    </header>

    <section class="w-full p-3">
      <slot name="content" />
    </section>

    <footer class="flex w-full flex-row items-center justify-end gap-2 p-3">
      <ButtonItem @click="closeModal" :title="props.closeTitle" type="danger" />
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
