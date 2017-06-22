<template>
  <div class="index container">
    <el-card class="box-card">
      <span style="line-height: 36px;">工站列表</span>
      <el-button :style="btnStyle" icon="view" @click="$router.push('/stationlist')">查看</el-button>
    </el-card>
    <el-card class="box-card">
      <span style="line-height: 36px;">工序详细</span>
      <el-button :style="btnStyle" icon="view" @click="$router.push('/Processreport/')">查看</el-button>
    </el-card>
    <el-card class="box-card">
      <span style="line-height: 36px;">工序订单</span>
      <el-button :style="btnStyle" icon="view" @click="$router.push('/Processreport/order')">查看</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    created () {
      this.btnStyle = { float: 'right' }
    }
  }
</script>

<style lang="css" scoped>
  .box-card {
    margin: 10px 0;
  }
</style>
