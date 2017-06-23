<template>
  <div class="processs-table container">
    <el-table :data="tableData" stripe border style="width: 100%" @row-click="showDetail">
      <el-table-column label="日期" width="135">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 2px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Class_code" label="班次" width="65" align="center">
      </el-table-column>
      <el-table-column prop="OrderN0" label="批次">
      </el-table-column>
      <el-table-column v-if="!isMobile" prop="Initqty" label="投入" width="90" align="center">
      </el-table-column>
      <el-table-column v-if="!isMobile" prop="Qty" label="产出" width="90" align="center">
      </el-table-column>
      <el-table-column v-if="!isMobile" prop="Fqty" label="不良" width="80" align="center">
      </el-table-column>
      <el-table-column v-if="!isMobile" prop="rejectRatio" label="不良率" width="90" align="center">
      </el-table-column>
    </el-table>
    <el-dialog :title="row.OrderN0" size="large" :visible.sync="dialogVisible">
      <el-card>
        <el-row :gutter="20">
        <template v-for="(name, key) in KEYS">
            <el-col class="col" :span="8">{{ name }}:</el-col>
            <el-col class="col" :span="16">{{ row[key] }}</el-col>
          </template>
        </el-row>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'processTable',
    props: {
      processCode: {
        type: String
      }
    },
    data () {
      return {
        dialogVisible: false,
        inOutNgList: [],
        row: {},
        KEYS: {
          OrderN0: '批次',
          date: '日期',
          Class_code: '班次',
          Initqty: '投入',
          Qty: '产出',
          Fqty: '不良',
          rejectRatio: '不良率'
        }
      }
    },
    computed: {
      isMobile () {
        return window.innerWidth < 992
      },
      tableData () {
        return this.inOutNgList.map(item => {
          item.date = item.P_date.substr(0, 10)
          item.rejectRatio = Math.round(item.Fqty / item.Initqty * 100000) / 1000 + '%'
          return item
        })
      }
    },
    watch: {
      processCode: 'fetchInOutNgList'
    },
    methods: {
      showDetail (row, e, col) {
        this.row = row
        this.dialogVisible = true
      },
      fetchInOutNgList () {
        if (!this.processCode) {
          return
        }
        this.$http.get(`/processInOutNg.ashx?process_code=${this.processCode}`).then(res => {
          this.inOutNgList = res.data.InOutNgList
        }).catch(err => console.log(err))
      }
    },
    activated () {
      this.fetchInOutNgList()
    }
  }
</script>

<style lang="css" scoped>
  .col {
    margin: 5px 0;
  }

  .col:nth-child(odd) {
    text-align: right;
  }
</style>
