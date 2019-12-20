<template>
  <div
    :key="stone.id"
    class="container mx-auto py-8 flex"
  >
    <div class="flex-1 pr-12">
      <StoneWithDetails :stone="stone" />
    </div>
    <div class="flex-1 flex-shrink">
      <h1 class="py-6 text-2xl text-center font-semibold tracking-tight text-teal-900">
        Similar stones
      </h1>
      <Grid />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StoneWithDetails from '@/components/StoneWithDetails'
import Grid from '@/components/Grid'

export default {
  name: 'ViewStone',
  components: {
    StoneWithDetails,
    Grid
  },
  data () {
    return {
      stone: false
    }
  },
  computed: {
    ...mapGetters(['getStoneById'])
  },
  watch: {
    '$route.params.id': function (id) {
      this.getStone(id)
    }
  },
  created () {
    if (this.$route.params.id) {
      this.getStone(Number(this.$route.params.id))
    }
  },
  methods: {
    getStone (id) {
      this.stone = this.getStoneById(id)
    }
  }
}
</script>
