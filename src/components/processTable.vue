<template>
  <div class="processs-table container">
    <h2 class="process-name">{{process.process_name}}</h2>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column label="日期" width="150">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 2px">{{ scope.row.P_date.substr(0, 10) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Class_code" label="班次" width="80" align="center">
      </el-table-column>
      <el-table-column prop="OrderN0" label="批次">
      </el-table-column>
      <el-table-column prop="Initqty" label="投入" width="90" align="center">
      </el-table-column>
      <el-table-column prop="Qty" label="产出" width="90" align="center">
      </el-table-column>
      <el-table-column prop="Fqty" label="不良" width="80" align="center">
      </el-table-column>
      <el-table-column label="不良率" width="90" align="center">
        <template scope="scope">
          <span>{{ Math.round(scope.row.Fqty / scope.row.Initqty * 100000) / 1000 + '%'}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'processTable',
    props: {
      process: {
        type: Object
      }
    },
    data () {
      return {
        tableData: []
      }
    },
    watch: {
      process: 'fetchInOutNgList'
    },
    methods: {
      fetchInOutNgList () {
        if (!this.process.process_code) {
          return
        }
        this.$http.get(`/processInOutNg.ashx?process_code=${this.process.process_code}`).then(res => {
          this.tableData = res.data.InOutNgList
        }).catch(err => console.log(err))
      }
    },
    mounted () {
      this.fetchInOutNgList()
    }
  }
</script>

<style lang="css" scoped>
  .process-name {
    margin: 10px 0;
    font-size: 1.5rem;
    text-align: center;
  }
</style>
