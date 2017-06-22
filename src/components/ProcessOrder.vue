<template>
  <div class="process-order">
    <div ref="chart"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'ProcessOrder',
    props: {
      processCode: {
        type: String
      }
    },
    data () {
      return {
        chart: null
      }
    },
    methods: {
      _setChartContainerHeigh () {
        let height = window.innerHeight - this.$refs.chart.getBoundingClientRect().top + 'px'
        this.$refs.chart.style.height = height
        console.log('ok')
      },
      _getInitSettings () {
        return {
          legend: {
            orient: 'vertical',
            data: ['计划', '达成'],
            right: 20,
            top: 'middle'
          },
          grid: {
            right: '200px',
            containLabel: true
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                fontSize: 24
              }
            }
          },
          yAxis: {
            data: [],
            axisLabel: {
              rotate: 0,
              textStyle: {
                fontSize: 24
              }
            }
          },
          color: ['#418ebd', '#44c57e', '#c23531', '#c4ccd3'],
          textStyle: {
            fontSize: 24
          },
          series: [
            {
              name: '计划',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            },
            {
              name: '达成',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            }
          ]
        }
      },
      _getInitMobileSettings () {
        return {
          legend: {
            data: ['计划', '达成'],
            top: 20
          },
          grid: {
            left: '15%',
            right: '10%'
          },
          xAxis: {
          },
          yAxis: {
            data: [],
            axisLabel: {
              rotate: 60
            }
          },
          color: ['#418ebd', '#44c57e', '#c23531', '#c4ccd3'],
          textStyle: {
            fontSize: 12
          },
          series: [
            {
              name: '计划',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            },
            {
              name: '达成',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            }
          ]
        }
      },
      _getChartData (orderList) {
        return {
          yAxis: {
            data: orderList.map(item => `${item.orderno.split('-')[0]}`)
          },
          series: [{
            data: orderList.map(item => item.planqty)
          }, {
            data: orderList.map(item => item.initqty)
          }]
        }
      },
      fetchOrderPlan () {
        if (!this.processCode) {
          return
        }
        let url = `/processInOutNg.ashx?ActType=GetOrderPlan&process_code=${this.processCode}`
        this.$http.get(url).then(res => {
          this.chart.setOption(this._getChartData(res.data.orderplan))
        }).catch(err => console.log(err))
      },
      initEcharts () {
        this.$nextTick(_ => {
          this._setChartContainerHeigh()
          this.chart = echarts.init(this.$refs.chart)
          let opts = window.innerWidth < 992 ? this._getInitMobileSettings() : this._getInitSettings()
          this.chart.setOption(opts)
        })
      }
    },
    activated () {
      this.chart || this.initEcharts()
      this.fetchOrderPlan()
    }
  }
</script>

<style lang="css" scoped>
</style>
