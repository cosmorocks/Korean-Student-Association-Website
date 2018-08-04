import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false
// Sweet Alert 2 (Vue version)
Vue.use(VueSweetalert2);

// VeeValidate (Vue validation plug-in)
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
