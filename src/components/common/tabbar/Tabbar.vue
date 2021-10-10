<template>
  <div>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
 
  export default {
    name: 'Tabbar',
   
  }
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    height: 49px;
    justify-content: space-around;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    display: flex;


  }

  /* .tab-bar div {
      flex: 1;
  } */
</style>