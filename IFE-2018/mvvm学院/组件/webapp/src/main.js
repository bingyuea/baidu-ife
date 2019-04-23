import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IconSvg from "./components/iconSvg"

Vue.config.productionTip = false
//全局注册icon-svg
Vue.component('icon-svg', IconSvg)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
