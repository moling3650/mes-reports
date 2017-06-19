import Mock from 'mockjs'

import stationList from './mock.stationlist.js'

function addToMock (list) {
  list.map(item => Mock.mock(item.rurl, item.data))
}

export const initMock = () => {
  Mock.mock(/Commom\.ashx/, [
    { WorkShopId: 35, WorkShopCode: '001', WorkShopName: '制片车间' },
    { WorkShopId: 65, WorkShopCode: '002', WorkShopName: '装配车间' },
    { WorkShopId: 66, WorkShopCode: '003', WorkShopName: '化成车间' }
  ])
  addToMock(stationList)
}
