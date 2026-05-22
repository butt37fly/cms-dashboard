<script setup>
const props = defineProps({
  type: String,
  message: String,
})
</script>

<template>
  <output :class="`c-toast c-toast--${props.type}`">
    {{ props.message }}
  </output>
</template>

<style lang="postcss" scoped>
.c-toast {
  @apply flex w-full rounded border px-4 py-3 text-xs;

  --background-color: theme(colors.gray.200);
  --border-color: theme(colors.gray.400);
  --text-color: theme(colors.gray.600);

  background-color: var(--background-color);
  border-color: var(--border-color);
  color: var(--text-color);
}

.c-toast--success {
  --background-color: theme(colors.success.50);
  --border-color: theme(colors.success.100);
  --text-color: theme(colors.success.300);
}

.c-toast--warning {
  --background-color: theme(colors.warning.50);
  --border-color: theme(colors.warning.200);
  --text-color: theme(colors.warning.300);
}

.c-toast--error {
  --background-color: theme(colors.danger.50);
  --border-color: theme(colors.danger.100);
  --text-color: theme(colors.danger.300);
}
</style>
