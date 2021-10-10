<template>
  <div>
    <div class="tebbaritem" @click="itemCilck">
      <div class="ietmimg">
        <div v-if="!isActive">
          <slot name="item-icon">图片</slot>
        </div>
        <div v-else>
          <slot name="item-active-icon">图片</slot>
        </div>
      </div>
      <div :style="isActiveStyle">
        <slot name="item-text">首页</slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar-item',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !==-1
        },
        isActiveStyle() {
            return this.isActive ? {color: this.activeColor}:{}
        }
    },
    methods:{
        itemCilck() {
           this.$router.push(this.path)
        },
        

    }

  }
</script>

<style scoped>
  .tebbaritem {
    font-size: 14px;
  }

  .ietmimg {
    width: 24px;
    height: 30px;
  }

  .ietmimg img {
    width: 24px;
    margin-top: 3px;
    margin-left: 3px;
    vertical-align: meddle;

  }

 
</style>