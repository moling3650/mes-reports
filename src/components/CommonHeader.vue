<template>
  <el-menu class="common-header" mode="horizontal" menu-trigger="click" :router="true">
    <div class="container">
      <el-menu-item index="/"><i class="el-icon-arrow-left"></i>首页</el-menu-item>
      <el-submenu :style="{float: 'right'}" index="reports">
        <template slot="title"><i class="el-icon-document"></i>看板</template>
        <el-menu-item index="/stationlist">工站列表</el-menu-item>
        <el-menu-item index="/processreport/">工序详细</el-menu-item>
        <el-menu-item index="/processreport/order">工序订单</el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
  export default {
    name: 'CommonHeader'
  }
</script>

<style lang="css" scoped>

</style>
