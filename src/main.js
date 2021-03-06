// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import App from './App'
import router from './router'

import 'reset.css'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(ElementUI)
Vue.use(VCharts)

import { initMock } from './api/mock'
initMock()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
