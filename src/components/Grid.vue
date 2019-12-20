<template>
  <masonry
    :cols="{
      default: 3,
      768: 2
    }"
    :gutter="{
      default: '1rem',
      700: '0.5rem'
    }"
  >
    <div
      v-for="stone in stones"
      :key="stone.id"
      class="min-w-1/2 md:min-w-0 mb-2 md:mb-4"
    >
      <StoneCard
        :id="stone.id"
        :image-url="stone.imageUrl"
        :tags="stone.tags"
      />
    </div>
  </masonry>
</template>

<script>
import { mapState } from 'vuex'
import StoneCard from '@/components/StoneCard'

export default {
  name: 'Grid',
  components: {
    StoneCard
  },
  computed: {
    ...mapState(['stones'])
  }
}
</script>
