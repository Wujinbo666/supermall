<template>
  <div class="goods">
    <goodslist-item class="goodItem" v-for="(item,i) in goods" :key="i" :goods-item="item" />
  </div>
</template>

<script>
  import GoodslistItem from './GoodsListItem.vue'
  export default {
    name: 'GoodList',
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      GoodslistItem
    }
  }
</script>

<style lang="less" scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>