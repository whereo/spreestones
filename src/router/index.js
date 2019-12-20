import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "new" */ '@/views/AddStone'),
    meta: { transitionName: 'fade-in-up' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
    meta: { transitionName: 'fade-in-up' }
  },
  {
    path: '/stone/:id',
    name: 'view-stone',
    component: () =>
      import(/* webpackChunkName: "stone" */ '@/views/ViewStone'),
    meta: { transitionName: 'fade-in-up' }
  },
  {
    path: '/tag/:tag',
    name: 'view-tag',
    component: () => import(/* webpackChunkName: "stone" */ '@/views/ViewTag'),
    meta: { transitionName: 'fade-in-up' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
