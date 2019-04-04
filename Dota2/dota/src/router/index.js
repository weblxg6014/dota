import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../components/index.vue'
import news from '../components/news.vue'
import button from '../components/news/button.vue'
import newsIndex from '../components/newsIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/newsIndex',component:newsIndex},
    {path:'/news/:id',component:news},
    {path:'/button',component:button},
  ]
})
