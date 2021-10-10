<template>
  <div class="recommend">
    <div class="recommendItem" v-for="(item,i) in recommends" :key="i">
      <a href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: Array
    }
  }
</script>

<style scoped lang="less">
  .recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #f6f6f6;
    .recommendItem {
      text-align: center;
      flex: 1;
      font-size: 12px;

      img {
        width: 1.866667rem;
        padding-bottom: .08rem;
      }
    }
  }
</style>