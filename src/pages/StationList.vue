<template>
  <div class="station-list">工站列表</div>
</template>

<script>
  export default {
    name: 'StationList',
    created () {
      this.$http.get('/DataAPI/Commom.ashx').then(res => {
        console.log(res.data)
      }).catch(err => console.log(err))
    }
  }
</script>

<style lang="css" scoped>
</style>
