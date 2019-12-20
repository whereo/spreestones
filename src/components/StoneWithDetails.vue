<template>
  <div
    v-if="stone"
    :key="stone.id"
    class="inline-block w-auto mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-h-screen"
  >
    <img
      class="max-w-full max-h-full"
      :src="stone.imageUrl"
    >
    <div class="flex px-6 py-4 -mx-1">
      <Tag
        v-for="tag in stone.tags"
        :key="tag"
        :name="tag"
      />
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  name: 'ViewStone',
  components: {
    Tag
  },
  props: {
    stone: {
      type: Object,
      default: null
    }
  }
}
</script>
