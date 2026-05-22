<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: '',
    required: false,
  },
})
</script>

<template>
  <div class="flex w-full flex-col gap-3 rounded-sm border p-3">
    <img class="aspect-[16/9] object-cover" :src="`https://butt37fly.github.io/${props.img}`" />
    <div class="flex flex-col gap-2">
      <h2 class="overflow-hidden text-ellipsis text-nowrap text-lg">{{ props.title }}</h2>
      <ul>
        <li class="text-xs text-gray-700">Editar</li>
        <li class="text-xs text-danger-200">Eliminar</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
