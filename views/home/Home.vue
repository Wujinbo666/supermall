<template>
  <div class="home">
    <div class="positionNav">
      <nav-bar class="nav-bar">
        <div slot="center">购物车</div>
      </nav-bar>
    </div>
    <home-swiper :banners="banners"></home-swiper>
    <recomment-view :recommends="recommends"></recomment-view>
    <feature></feature>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick='tabClick'></tab-control>
    <good-list :goods=" showGoods"></good-list>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>

    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/Navbar.vue'
  import HomeSwiper from './childcomps/HomeSwiper.vue'
  import RecommentView from './childcomps/RecommendView.vue'
  import Feature from './childcomps/Feature.vue'

  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodList from 'components/content/goods/GoodList.vue'

  import { getHomeMultidata, getHomeGoods } from '../../src/network/home'

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        currentType: 'pop'
      }
    },
    created() {
      // 请求多个数据banner
      this.getHomeMultidata()
      //   请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    computed:{
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      async getHomeGoods(type) {
        const page = this.goods[type].page + 1
        const { data: res } = await getHomeGoods(type, page)
        this.goods[type].list.push(...res.list)
        this.goods[type].page = res.page
        console.log('goods-----', res.list, res.page);
      },
      tabClick(i) {
        // this.currentType = Object.keys(this.goods)[i]
        // this.currentType = i==0? 'pop': i==1? 'new' : i==2 ? 'sell'
        switch (i) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

        console.log(i,this.currentType);
      }


    },
    components: {
      NavBar,
      HomeSwiper,
      RecommentView,
      Feature,
      TabControl,
      GoodList
    }
  }
</script>

<style lang="less" scoped>
  .positionNav {
    height: 44px;
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 18px;
    z-index: 1;
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>