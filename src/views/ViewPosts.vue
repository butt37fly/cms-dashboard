<script setup>
import PostCard from '@/components/PostCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const url = '/public/json/posts.json'
const posts = ref(null)

onMounted(async () => {
  const response = await axios.get(url)
  posts.value = response.data
})
</script>
<template>
  <main class="mt-[40px] flex w-full flex-col gap-8 p-3">
    <section class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <PostCard v-for="post in posts" :key="post" :title="post.title" :img="post.image" />
    </section>
  </main>
</template>
<style scoped></style>
