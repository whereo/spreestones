<template>
  <div class="container max-w-2xl mx-auto py-8">
    <div class="bg-white rounded-lg overflow-hidden">
      <img
        class="w-full"
        :src="stone.imageUrl"
      >
      <div class="w-full flex px-6 py-4 -mx-1">
        <Tag
          v-for="tag in stone.tags"
          :key="tag"
          :name="tag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tag from '@/components/Tag'

export default {
  name: 'ViewStone',
  components: {
    Tag
  },
  data () {
    return {
      stone: {}
    }
  },
  computed: {
    ...mapGetters(['getStoneById'])
  },
  created () {
    this.stone = this.getStoneById(Number(this.$route.params.id))
  }
}
</script>

<style>

</style>
