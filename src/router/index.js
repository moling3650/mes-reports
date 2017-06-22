import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import StationList from '@/pages/StationList'
import ProcessReport from '@/pages/ProcessReport'
import ProcessTable from '@/components/ProcessTable'
import ProcessOrder from '@/components/ProcessOrder'

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
      component: ProcessReport,
      children: [
        {
          path: '',
          name: 'ProcessTable',
          component: ProcessTable
        },
        {
          path: 'order',
          name: 'ProcessOrder',
          component: ProcessOrder
        }
      ]
    }
  ]
})
