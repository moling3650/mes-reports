import Mock from 'mockjs'

export default [
  {
    rurl: /processInOutNg\.ashx\?ActType=GetProcessCode/,
    data: {
      'ProcessList|2': [
        {
          'process_code|+1': ['ZJTBAM', 'FJTBAM'],
          'process_name|+1': ['正极涂布单面', '负极涂布单面']
        }
      ]
    }
  },
  {
    rurl: /processInOutNg\.ashx\?process_code=(Z|F)JTBAM/,
    data: function (options) {
      let match = /process_code=(\w+)(?=&|$)/.exec(options.url)
      return Mock.mock({
        'InOutNgList|1-3': [
          {
            'PlanQty': 100000.000,
            'P_date|+1': ['2017-06-20 00:00:00', '2017-06-19 00:00:00', '2017-06-18 00:00:00'],
            'OrderN0': 'TYU-01-01',
            'P_name': match[1] === 'ZJTBAM' ? '正极涂布单面' : '负极涂布单面',
            'Class_code': '白班',
            'Qty': 0.0,
            'Fqty': 0.000,
            'Frate': 0.000000,
            'Initqty|1000-100000': 1
          }
        ]
      })
    }
  }
]
