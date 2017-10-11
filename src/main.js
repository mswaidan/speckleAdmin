// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'
import App from './App'
import router from './router'
import Store from './store/Store'

import Streams from './components/Streams.vue'
Vue.component('streams',Streams)
import Clients from './components/Clients.vue'
Vue.component('clients',Clients)
import Login from './components/Login.vue'
Vue.component('login',Login)
import Register from './components/Register.vue'
Vue.component('register',Register)
import User from './components/User.vue'
Vue.component('user', User)

Vue.prototype.$http = axios;

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080/api/' //change to your server address
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
    primary: 'black',
    accent: 'light-blue',
    warn: 'red',
    background: 'white'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: Store,
  router,
  template: '<App/>',
  components: { App }
})
