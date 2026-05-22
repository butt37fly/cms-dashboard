<script setup>
import PostCard from '@/components/PostCard.vue'
import PostCardModal from '@/components/PostCardModal.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const url = '/public/json/posts.json'
const posts = ref(null)
const activePost = ref({})

const setActivePost = (id) => {
  const target = posts.value.find((post) => post.id === id)

  activePost.value = target ?? {}
}

onMounted(async () => {
  const response = await axios.get(url)
  posts.value = response.data
  activePost.value = response.data[0]
})
</script>
<template>
  <main class="mt-[40px] flex w-full flex-col gap-8 p-3">
    <section class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <PostCard
        v-for="post in posts"
        :key="post"
        :id="post.id"
        :title="post.title"
        :img="post.image"
        @edit-post="(id) => setActivePost(id)"
      />
      <PostCardModal v-bind="activePost" />
    </section>
  </main>
</template>
<style scoped></style>
