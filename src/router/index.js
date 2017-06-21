import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import StationList from '@/pages/StationList'
import ProcessReport from '@/pages/ProcessReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/stationlist',
      name: 'StationList',
      component: StationList
    },
    {
      path: '/processreport',
      name: 'ProcessReport',
      component: ProcessReport
    }
  ]
})
