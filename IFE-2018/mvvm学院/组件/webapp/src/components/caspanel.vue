<template>
  <div>
    
    <ul class="Cascader_content_box_ul">
      <li :class="[item.selected ? 'selected' : '' , 'Cascader_content_box_item']"
          v-for="(item,index,key) in sourceData" :key="key"
          @click="handleSelected(sourceData,item,index)">
        <div class="Cascader_content_box_item_icon">
          <icon-svg icon-class="arrow"></icon-svg>
        </div>
        <p v-text="item.label"></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "caspanel",
    data() {
      return {
        sourceData: [
          {
            value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                  {
                    value: 'yizhi',
                    label: '一致'
                  },{
                    value: 'fankui',
                    label: '反馈'
                  },{
                    value: 'xiaolv',
                    label: '效率'
                  },{
                    value: 'kekong',
                    label: '可控'
                  } ]
              },{
                value: 'daohang',
                label: '导航',
                children: [
                  {
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  },{
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  } ]
              } ]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [
              {
                value: 'axure',
                label: 'Axure Components'
              },{
                value: 'sketch',
                label: 'Sketch Templates'
              },{
                value: 'jiaohu',
                label: '组件交互文档'
              }
            ]
          }
        ],
      }
    },
    methods: {
      // 处理选中的哪个
      handleSelected(data,item,index) {
        this.$set(data[ index ],"selected",true);
        if (item && item.children) {
          this.sourceData2 = item.children;
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .Cascader {
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