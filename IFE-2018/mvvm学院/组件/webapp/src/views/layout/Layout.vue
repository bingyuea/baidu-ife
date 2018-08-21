<template>
  <div>
    <Side></Side>
    <Mains></Mains>
  </div>
</template>

<script>
  import Mains from "./Mains"
  import Side from "./Side"
  export default {
    name: "layout",
    components:{
      Mains,
      Side
    }
  }
</script>

<style scoped>

</style>