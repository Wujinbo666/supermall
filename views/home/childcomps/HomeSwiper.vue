<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
  import { Swiper, SwiperItem } from '../../../src/components/common/swiper'
  export default {
    name: 'Home',
    props:{
        banners:Array,
        recommends:Array
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>