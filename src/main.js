import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'
import { firebaseConfig } from '../firebase-config'

firebase.initializeApp(firebaseConfig)

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

/* Firebase 9 config*/
// import { initializeApp } from 'firebase/app'
// import { firebaseConfig } from '../firebase-config'

// const app = initializeApp(firebaseConfig)
