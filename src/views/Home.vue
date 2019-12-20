/* eslint-disable vue/attribute-hyphenation */
<template>
  <div class="home">
    <div class="w-full mx-auto py-8 px-8">
      <Waterfall
        resizeable="true"
      >
        <WaterfallItem
          v-for="stone in stones"
          :key="stone.id"
          :width="250"
          class="p-2"
        >
          <StoneCard
            :id="stone.id"
            :image-url="stone.imageUrl"
            :tags="stone.tags"
          />
        </WaterfallItem>
      </Waterfall>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Waterfall, WaterfallItem } from 'vue2-waterfall'
import StoneCard from '@/components/StoneCard'

export default {
  name: 'Home',
  components: {
    StoneCard,
    Waterfall,
    WaterfallItem
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['stones'])
  }
}
</script>
