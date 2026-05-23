<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'info',
  },
  link: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: '_self',
  },
})
</script>

<template>
  <a
    v-if="props.link !== null"
    :href="props.link"
    :target="props.target"
    :class="`c-a c-button--${props.type}`"
  >
    {{ props.title }}
  </a>
  <button v-else :class="`c-button c-button--${props.type}`">{{ props.title }}</button>
</template>

<style lang="postcss" scoped>
.c-button {
  @apply rounded border px-4 py-2 text-base font-semibold;

  --accent-color: theme(colors.blue.600);
  --background-color: theme(colors.blue.400);
  --text-color: theme(colors.white);

  background-color: var(--background-color);
  border-color: var(--accent-color);
  color: var(--text-color);
  transition: 0.3s;
}

.c-button:active,
.c-button:focus,
.c-button:hover {
  background-color: var(--accent-color);
  border-color: var(--text-color);
}

.c-button--success {
  --accent-color: theme(colors.success.100);
  --background-color: theme(colors.success.50);
  --text-color: theme(colors.success.300);
}

.c-button--warning {
  --accent-color: theme(colors.warning.200);
  --background-color: theme(colors.warning.50);
  --text-color: theme(colors.warning.300);
}

.c-button--error {
  --accent-color: theme(colors.danger.100);
  --background-color: theme(colors.danger.50);
  --text-color: theme(colors.danger.300);
}
</style>
