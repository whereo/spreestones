<template>
  <transition name="fade">
    <div
      class="fixed inset-0 flex items-center justify-center cursor-pointer backdrop"
      @click="closeModal"
    >
      <div class="container max-w-2xl mx-auto max-h-screen py-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl z-10">
          <slot>
            STONE
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  components: {
    // StoneWithDetails
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style>
.backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
