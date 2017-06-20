<template>
  <el-card class="station-card" :body-style="{padding: '15px 10px'}" :class="{'error': data.SFC === null}">
    <div slot="header" class="title">
      <h2>{{data.StationName || '工站A'}}</h2>
    </div>
    <el-row>
      <el-col :span="7">SFC：</el-col>
      <el-col :span="17">{{data.SFC || '无'}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="7">责任人：</el-col>
      <el-col :span="17">{{data.Emp_Code || '无'}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="7">工单：</el-col>
      <el-col :span="17">{{data.MainOrder || '无'}}</el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'StationCard',
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="css" scoped>

  .title {
    position: relative;
  }

  .el-icon-loading {
    position: absolute;
    top: 10px;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .el-col {
    margin: 1px 0;
    font-size: 14px;
  }

  .el-col:nth-child(2n) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .el-col:nth-child(2n+1) {
    text-align: right;
  }

  .error {
    color: #FF4949;
  }
</style>
