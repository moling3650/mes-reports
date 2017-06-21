<template>
  <el-menu class="common-header" mode="horizontal" :router="true">
    <div class="container">
      <el-menu-item index="/"><i class="el-icon-arrow-left"></i>返回</el-menu-item>
      <el-submenu :style="{float: 'right'}" index="/reports">
        <template slot="title"><i class="el-icon-document"></i>看板</template>
        <el-menu-item index="/stationlist">工站列表</el-menu-item>
        <el-menu-item index="/processreport/">工序监控</el-menu-item>
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
