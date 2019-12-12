<template>
  <div class="">
    <div class="container max-w-2xl mx-auto py-8">
      <h1>Stones tagged with <span class="font-bold">{{ $route.params.tag }}</span></h1>
      <masonry
        :cols="{default: 3, 700: 2, 400: 1}"
        :gutter="{default: '1rem', 700: '0.5rem'}"
      >
        <div
          v-for="stone in stones"
          :key="stone.id"
          class="min-w-1/2 md:min-w-0 mb-8"
        >
          <Stone
            :id="stone.id"
            :image-url="stone.imageUrl"
            :tags="stone.tags"
          />
        </div>
      </masonry>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stone from '@/components/Stone'

export default {
  components: {
    Stone
  },
  data () {
    return {
      stones: {}
    }
  },
  computed: {
    ...mapGetters(['findStonesByTag'])
  },
  created () {
    this.stones = this.findStonesByTag(this.$route.params.tag)
  }
}
</script>

<style>

</style>
