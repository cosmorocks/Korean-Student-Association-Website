import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Officers from './views/Officers.vue'
import Events from './views/Events.vue'
import Expo from './views/Expo.vue'
import Thanks from './views/Thanks.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: Home
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
    {
      path:'/thanks',
      name: 'thanks',
      component: Thanks
    }
  ]
})
