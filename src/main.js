import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

Vue.config.productionTip = false

import {router } from  './router' //importo el router
import './form'
import './axios'

new Vue({
  router, //aca tmb se importa el router
  render: h => h(App),
}).$mount('#app')
