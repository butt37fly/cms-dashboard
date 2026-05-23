<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
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
    :class="`c-button c-button--${props.type}`"
  >
    {{ props.title }}
  </a>
  <button v-else :class="`c-button c-button--${props.type}`">{{ props.title }}</button>
</template>

<style lang="postcss" scoped>
.c-button {
  @apply rounded border px-4 py-2 text-base font-semibold;

  --accent-color: theme(colors.gray.900);
  --background-color: theme(colors.gray.700);
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

.c-button--primary {
  --accent-color: theme(colors.primary.200);
  --background-color: theme(colors.primary.100);
  --text-color: theme(colors.white);
}

.c-button--secondary {
  --accent-color: theme(colors.secondary.200);
  --background-color: theme(colors.secondary.100);
  --text-color: theme(colors.white);
}

.c-button--danger {
  --accent-color: theme(colors.danger.200);
  --background-color: theme(colors.danger.100);
  --text-color: theme(colors.white);
}
</style>
