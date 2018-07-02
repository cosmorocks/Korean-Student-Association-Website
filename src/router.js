import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Officers from './views/Officers.vue'
import Events from './views/Events.vue'
import Expo from './views/Expo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //delete this if something breaks
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/officers',
      name: 'officers',
      component: Officers
    },
    {
      path:'/events',
      name: 'events',
      component: Events
    },
    {
      path:'/expo',
      name: 'expo',
      component: Expo
    },
  ]
})
