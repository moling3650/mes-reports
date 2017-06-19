// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'

import 'reset.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

import { initMock } from './api/mock'
initMock()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
