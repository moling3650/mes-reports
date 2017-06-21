<template>
  <div class="process-report">
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader'

  export default {
    name: 'ProcessReport',
    components: {
      CommonHeader
    },
    data () {
      return {
        processList: [],
        index: 0
      }
    },
    methods: {
      fetchProcessList () {
        this.$http.get('/processInOutNg.ashx?ActType=GetProcessCode').then(res => {
          this.processList = res.data.processList
        }).catch(err => console.log(err))
      }
    },
    created () {
      this.fetchProcessList()
    }
  }
</script>

<style lang="css" scoped>
</style>
