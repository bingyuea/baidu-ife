<template>
  <div class="hello">
    <div>
      <p>姓名<span>{{formData.name}}</span></p>
      <p>年龄<span>{{formData.age}}</span></p>
      <p>简介<span>{{formData.description}}</span></p>
    </div>
    <div>
      <label>
        信息：
        <button @click  = "removeFormData">移出信息</button>
      </label>
    </div>
    <div>
      <label>
        姓名：
        <input type="text" v-model="formData.name"/>
      </label>
      <label>
        年龄：
        <input type="text" v-model="formData.age"/>
      </label>
      <label>
        简介：
        <input type="text" v-model="formData.description"/>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      formData:{
        name:"",
        age:"",
        description:""
      }
    }
  },
  methods:{
    removeFormData(){
      for(let k in this.formData){
        this.formData[k] = "";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
