<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from '../src/components/content/Maintabbar.vue'
  
  export default {
    name: 'App',
    components: {
      MainTabbar,
    },

  }
</script>

<style lang="less">
  @import 'assets/css/base.css';
</style>