<template>
  <div class="index container">
    <el-card class="box-card">
      <span style="line-height: 36px;">工站列表看板</span>
      <el-button style="float: right;" icon="view" @click="$router.push('/stationlist')">查看</el-button>
    </el-card>
    <el-card class="box-card">
      <span style="line-height: 36px;">工序看板</span>
      <el-button style="float: right;" icon="view" @click="$router.push('/Processreport')">查看</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style lang="css" scoped>
  .box-card {
    margin: 10px 0;
  }
</style>
