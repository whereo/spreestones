<template>
  <div
    class="rounded-lg overflow-hidden shadow cursor-pointer  hover:shadow-xl"
    @click="routeToStone"
  >
    <img
      class="w-full"
      :src="imageUrl"
    >
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
  },
  methods: {
    routeToStone () {
      this.$router.push({
        name: 'view-stone',
        params: {
          id: this.id
        }
      })
    }
  },
  beforeRouteUpdate (to) {
    this.id = to.params.id
  }
}
</script>

<style>

</style>
