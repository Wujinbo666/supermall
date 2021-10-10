<template>
  <div class="goodsitem">
    <img :src="goodsItem.show.img" alt="">
    <div class="itembox">
      <p class="itemInfo">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .goodsitem {
    font-size: .32rem;
    // width: 140px;

    img {
      width: 4.8rem;
      border-radius: .133333rem;
    }

    .itemInfo {
     
      width: 4rem;
      /*设置文本框大小*/
      white-space: nowrap;
      /*设置内容不换行*/
      text-overflow: ellipsis;
      /*设置文字超出文本框的内容显示成...*/
      overflow: hidden;
      /*超出部分隐藏*/
    }

    .itembox {
      width: 100%;

      .price {
        padding-left: .933333rem;
        color: var(--color-high-text);
      }

      .collect {
        padding-left: .5rem;
        position: relative;

      }

      .collect::before {
        margin-left: .5rem;
        content: ' ';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url('../../../assets/img/common/collect.svg') no-repeat;
        background-size: 14px 14px;
        // background-color: pink;

      }
    }

  }
</style>