<template>
  <div class="rounded-lg shadow">
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <img
        :src="imageUrl"
      >
      <div class="w-full flex px-6 py-4 -mx-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-gray-200 px-3 py-1 mx-1"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    imageUrl: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>

</style>
