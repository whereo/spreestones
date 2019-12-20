<template>
  <div
    id="app"
    class="bg-gray-200 min-h-screen w-full overflow-x-hidden"
  >
    <header class="flex items-center justify-between text-center pt-2 lg:px-4 text-teal-800">
      <div id="brand">
        <router-link
          class="py-1 px-2 mx-1 font-bold"
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
          v-model="searchQuery"
          type="text"
          placeholder="Search for tags and images"
          class="bg-white shadow focus:bg-white w-full focus:outline-none focus:shadow-lg border border-gray-300 focus:border-gray-400 rounded-lg py-2 px-4 block appearance-none leading-normal text-teal-900"
          @keyup.enter="search"
        >
      </div>
      <div
        id="nav"
      >
        <router-link
          class="py-2 px-4 mx-1 uppercase leading-none text-xs font-semibold tracking-wider rounded-full hover:bg-gray-400 text-teal-800"
          :to="{
            name: 'about'
          }"
        >
          About
        </router-link>
        <router-link
          class="py-2 px-4 mx-1 uppercase leading-none text-xs font-semibold tracking-wider rounded-full bg-teal-700 hover:bg-teal-900 text-teal-100"
          :to="{
            name: 'new'
          }"
        >
          Add Picture
        </router-link>
      </div>
    </header>
    <transition
      :name="transitionName"
      :mode="transitionMode"
      :enter-active-class="transitionEnterActiveClass"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
const DEFAULT_TRANSITION_NAME = 'fade'
const DEFAULT_TRANSITION_MODE = 'out-in'

export default {
  name: 'App',
  data () {
    return {
      transitionName: DEFAULT_TRANSITION_NAME,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: '',

      searchQuery: ''
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION_NAME

      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE
      this.transitionEnterActiveClass = `${transitionName}-enter-active`

      if (to.meta.transitionName === 'zoom') {
        this.transitionMode = 'in-out'
        this.transitionEnterActiveClass = 'zoom-enter-active'

        document.body.style.overflow = 'hidden'
      }

      if (from.meta.transitionName === 'zoom') {
        this.transitionMode = null
        this.transitionEnterActiveClass = null

        document.body.style.overflow = null
      }

      this.transitionName = transitionName

      next()
    })
  },
  methods: {
    search () {
      console.log(this.searchQuery)
      this.$router.push({
        name: 'view-tag',
        params: {
          tag: this.searchQuery
        }
      })
    },
    beforeLeave (element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 20px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-up-leave-to {
  opacity: 0;
  transition: opacity .1s;
}

.fade-in-up-enter {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}

.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: .2s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
</style>
