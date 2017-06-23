<template>
  <div class="index container">
    <el-button class="btn" icon="view" @click="$router.push('/stationlist')">工站列表</el-button>
    <el-button class="btn" icon="view" @click="$router.push('/Processreport/')">工序详细</el-button>
    <el-button class="btn" icon="view" @click="$router.push('/Processreport/order')">工序订单</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style lang="css" scoped>
  .index {
    margin-top: 20px;
    padding: 0 5px;
    box-sizing: border-box;
  }

  .btn {
    margin: 10px;
  }
</style>
