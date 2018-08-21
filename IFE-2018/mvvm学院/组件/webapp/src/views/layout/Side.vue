<template>
  <div class = "side">
    <ul class = "side_content">
      <li class = "side_item">级联组件</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "side"
  }
</script>

<style scoped lang="scss">
  .side{
    position: fixed;
    left:0;
    top:0;
    bottom: 0;
    width: 200px;
    box-shadow: 0 0 10px #000;
    &_content{
      height: 100%;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    &_item{
      padding: 0 15px;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
  }
</style>