<template>
  <div class="container max-w-2xl mx-auto py-8">
    <div class="bg-white shadow rounded-lg">
      <h1 class="px-6 pt-6 text-2xl font-bold tracking-tight text-teal-900">
        Add a new stone
      </h1>
      <p class="px-6 py-4 pb-4 text-gray-700 text-sm leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ad ullam vel reiciendis nisi, nulla nostrum molestiae, natus distinctio maiores temporibus autem expedita fuga modi sit eos tenetur magnam aliquam eaque tempore. Ipsum necessitatibus molestias exercitationem similique, ad repudiandae dolores mollitia neque aliquam, possimus eius. Ipsa numquam tempora veniam voluptatem?
      </p>
      <form
        action=""
        class="w-full py-8"
      >
        <div class="w-full px-6 py-4">
          <div
            v-if="imageUrl"
            id="preview"
            class="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              :src="imageUrl"
            >
          </div>
          <div
            v-else
            class="flex items-center justify-center w-full bg-gray-200"
          >
            <label class="w-full flex flex-col items-center px-4 py-6 bg-gray-200 text-teal-800 rounded-lg tracking-wide uppercase border-blue cursor-pointer hover:bg-teal-800 hover:text-teal-100">
              <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-base leading-normal">Select a Picture</span>
              <input
                type="file"
                class="hidden"
                @change="onFileChange"
              >
            </label>
          </div>
          <div class="w-full pt-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="tags"
            >
              Tags
            </label>
            <input
              id="tags"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="#rounded, #green, #sun"
            >
            <p class="text-gray-700 mt-1 text-xs">
              Describe the stone. Multiple Tags can be split by comma.
            </p>
          </div>
          <div class="w-full pt-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="message"
            >
              Message for the Creator
            </label>
            <input
              id="message"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Thanks for this beautiful art"
            >
            <p class="text-gray-700 mt-1 text-xs">
              The creator probably would like to hear some compliment or a thank you ;)
            </p>
          </div>
        </div>
        <div class="w-full px-6 pt-6 mt-4 border-t border-gray-300">
          <button class="bg-teal-800 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
            Upload
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      imageUrl: false
    }
  },
  methods: {
    onFileChange (e) {
      const file = e.target.files[0]
      this.imageUrl = URL.createObjectURL(file)
    }
  }
}
</script>

<style>

</style>
