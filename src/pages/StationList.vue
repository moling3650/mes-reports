<template>
  <div class="station-list">
    <common-header></common-header>
    <main class="container">
      <el-row class="tool-bar" v-show="workShops.length">
        <el-col class="work-shop-name" :xs="12" :sm="16">
          <h2>{{ workShop.WorkShopName || '未选择车间' }}</h2>
        </el-col>
        <el-col class="work-shop-seleter" :xs="12" :sm="8">
          <el-select v-model="workShop" placeholder="请选择车间" @change="handleWorkShopChange">
            <el-option v-for="item in workShops" :key="item" :label="item.WorkShopName" :value="item">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-collapse accordion v-show="dataList.length">
        <el-collapse-item v-for="(process, name) in processList" :key="name" :name="name">
          <template slot="title">
            <span :class="{'error': process.error}" v-text="name"></span>
            <i v-show="process.error" class="header-icon el-icon-warning error"></i>
          </template>
          <el-row :gutter="10">
            <el-col :sm="24" :md="12" :lg="8" v-for="item in process.items" :key="item">
              <station-card :data="item"></station-card>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </main>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader'
  import StationCard from '@/components/StationCard'

  export default {
    name: 'StationList',
    components: {
      CommonHeader,
      StationCard
    },
    data () {
      return {
        workShops: [],
        workShop: {},
        dataList: []
      }
    },
    computed: {
      processList () {
        let obj = {}
        this.dataList.map(item => {
          if (!obj[item.ProcessName]) {
            obj[item.ProcessName] = {error: true, items: []}
          }
          if (item.SFC) {
            obj[item.ProcessName].error = false
          }
          obj[item.ProcessName].items.push(item)
        })
        return obj
      }
    },
    methods: {
      _fetchWorkShops () {
        this.$http.get('/DataAPI/Commom.ashx').then(res => {
          this.workShops = res.data
          if (this.workShops.length) {
            this.workShop = this.workShops[0]
          }
        }).catch(err => console.log(err))
      },
      _fetchStationList () {
        this.$http.get(`/StationList.ashx?wsCode=${this.workShop.WorkShopCode}`).then(res => {
          this.dataList = res.data.DataList
        }).catch(err => console.log(err))
      },
      handleWorkShopChange () {
        this.workShop.WorkShopCode && this._fetchStationList()
      }
    },
    created () {
      this._fetchWorkShops()
    }
  }
</script>

<style lang="css" scoped>
  .tool-bar {
    margin: 10px;
  }
  .work-shop-name {
    font-size: 1.5rem;
    line-height: 36px;
    text-align: center;
  }

  .work-shop-seleter {
    padding: 0;
    text-align: center;
  }

  .error {
    color: #FF4949;
  }

  .station-card {
    margin: 5px 0;
  }
</style>
