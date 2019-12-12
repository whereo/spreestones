<template>
  <div class="home">
    <div class="container max-w-2xl mx-auto py-8">
      <div
        v-for="stone in stones"
        :key="stone.id"
        class="pb-6"
      >
        <Stone
          :id="stone.id"
          :image-url="stone.imageUrl"
          :tags="stone.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Stone from '@/components/Stone'

export default {
  name: 'Home',
  components: {
    Stone
  },
  data () {
    return {
      stones: [
        {
          id: 1,
          imageUrl: 'https://images.unsplash.com/photo-1469006117505-78ac7334ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          tags: [
            'hand', 'grey'
          ]
        },
        {
          id: 2,
          imageUrl: 'https://images.unsplash.com/photo-1472494731104-3ba69e52845b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          tags: [
            'pile', 'multiple', 'warm', 'tower'
          ]
        },
        {
          id: 3,
          imageUrl: 'https://images.unsplash.com/photo-1447616061459-f7d9b9329bd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          tags: [
            'hands', 'brown', 'jacket'
          ]
        }
      ]
    }
  }
}
</script>
