<template>
  <div class="Cascader">
    <div class="Cascader_input" @click="handleCascaderOpen">
      <div class="Cascader_input_icon">
        <icon-svg icon-class="arrow_u"></icon-svg>
      </div>
    </div>
    <div>
      <div class="Cascader_content">
        <ul>
          <li class='Cascader_content_box'>
            <Caspanel ref = "caspanel"></Caspanel>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Caspanel from "./caspanel"
  export default {
    name: "Cascader",
    components:{
      Caspanel,
    },
    data() {
      return {
      
      }
    },
    methods: {
      handleCascaderOpen() {
      
      },
      
    }
  }
</script>

<style scoped lang="scss">
  .Cascader {
    &_input {
      width: 200px;
      border: 1px solid #000;
      height: 44px;
      line-height: 44px;
      padding-right: 20px;
      padding-left: 15px;
      position: relative;
      &_icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &_content {
        height: 100px;
        &_box {
          border-right: 1px solid #eee;
          height: 100%;
          overflow: auto;
          &_ul {
            display: inline-block;
            width: 200px;
          }
          &_item {
            border-bottom: 1px solid #000;
            height: 44px;
            line-height: 44px;
            padding-right: 20px;
            padding-left: 15px;
            position: relative;
            &.selected {
              background: #eee;
            }
            &_icon {
              position: absolute;
              right: 5px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
  }
</style>