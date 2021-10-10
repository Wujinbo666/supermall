<template>
  <div >
    <div class="navbar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<style scoped lang="less">
  .navbar {
    text-align: center;
    line-height: 44px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .3);
    display: flex;

    .left,
    .right {
      width: 60px;
    }

    .center {
      flex: 1;
    }
  }
</style>