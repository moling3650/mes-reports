<template>
  <div class="process-report">
    <common-header></common-header>
    <template v-if="process.process_code">
      <h2 class="process-name" ref="title" v-text="process.process_name"></h2>
      <keep-alive>
        <router-view :processCode="process.process_code"></router-view>
      </keep-alive>
    </template>
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
    computed: {
      process () {
        return this.processList.length > 0 ? this.processList[0] : {}
      }
    },
    methods: {
      fetchProcessList () {
        this.$http.get('/processInOutNg.ashx?ActType=GetProcessCode').then(res => {
          this.processList = res.data.ProcessList
        }).catch(err => console.log(err))
      }
    },
    created () {
      this.fetchProcessList()
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
