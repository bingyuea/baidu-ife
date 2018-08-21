<template>
  <div class = "main">
    <div class = "main_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mains"
  }
</script>

<style scoped lang="scss">
  .main{
    position: fixed;
    right:0;
    top:0;
    bottom: 0;
    left: 200px;
    &._content{
      width: 100%;
      height: 100%;
      overflow:auto ;
      padding: 15px;
    }
  }
</style>