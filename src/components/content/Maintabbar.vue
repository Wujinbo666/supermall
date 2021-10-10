<template>
  <div>
    <tab-bar>
      <tabbar-item path="/home" activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-icon" src="~/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">主页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/shopcart" activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile"  activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../common/tabbar/Tabbar.vue"
  import TabbarItem from '../common/tabbar/Tabbar-item.vue'
  export default {
    name: 'Maintabbar',
    components: {
      TabbarItem,
      TabBar
    }
  }
</script>

<style>
</style>