<template>
  <div
    id="app"
    class="bg-gray-200 min-h-screen w-full overflow-x-hidden"
  >
    <header class="flex items-center justify-between bg-teal-900 text-center py-4 lg:px-4 text-teal-100">
      <div id="brand">
        <router-link
          class="py-1 px-2 mx-1 font-bold hover:background-teal-300"
          :to="{
            name: 'home'
          }"
        >
          SpreeStones
        </router-link>
      </div>
      <div
        id="search"
        class="flex-grow max-w-2xl"
      >
        <input
          type="text"
          placeholder="Search for Tags"
          class="bg-teal-700 focus:bg-white w-full focus:outline-none focus:shadow-outline border border-teal-700 rounded-lg py-2 px-4 block appearance-none leading-normal text-teal-100 focus:text-teal-900"
        >
      </div>
      <div
        id="nav"
      >
        <router-link
          class="py-2 px-4 mx-1 uppercase leading-none text-xs font-semibold tracking-wider rounded-full hover:bg-teal-800"
          :to="{
            name: 'new'
          }"
        >
          Add Picture
        </router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
