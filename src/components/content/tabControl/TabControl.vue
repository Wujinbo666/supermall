<template>
  <div class="tabControl">
    <div @click="btnClick(i)" v-for="(item,i) in titles" :key="i" :class="{activeStyle:i==currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
        return {
            currentIndex:0
        }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods:{ 
        btnClick(i) {
            this.currentIndex = i
            this.$emit('tabClick',i)
        }
    }
  }
</script>

<style lang="less" scoped>
  .tabControl {
    display: flex;
    font-size: 15px;
    background-color: #f8f8f8;
    justify-content: space-around;
    line-height: 25px;
  }
  .activeStyle {
      padding: 0 5px;
      color: var(--color-high-text);
      border-bottom: 3px solid var(--color-high-text);
  }
</style>