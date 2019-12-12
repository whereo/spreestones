import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles
import '@/css/main.css'

// Masonry
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
