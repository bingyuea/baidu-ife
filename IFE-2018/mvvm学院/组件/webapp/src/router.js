import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout/Layout.vue'


import Cascader from './components/Cascader.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/components',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: 'cascader',
          name: 'Cascader',
          component: () => import('./components/Cascader.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'Layout',
      component: Layout
    },
  ]
})
