<template>
  <div
    class="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 cursor-pointer"
    @click="routeToTagView(name)"
  >
    #{{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    }
  },
  methods: {
    routeToTagView (tagName) {
      this.$router.push({
        name: 'view-tag',
        params: {
          tag: tagName
        }
      })
    }
  }
}
</script>

<style>

</style>
