import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入登录组件
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/useradd',
      //添加用户
      //异步加载：懒加载，在需要的时候加载，目的是节省内存占用
      component:()=>import('./views/UserAdd.vue')
    },
    {
      path:'/userlist',
      component:()=>import('./views/UserList.vue')
    },
    {
      path:'/pwdedit',
      component:()=>import('./views/UserPwsEdit.vue')
    },
    {
      path:'/pointsadd',
      component:() =>import('./views/PointsAdd.vue')
    },
    {
      path:'/pointsclass',
      component:() =>import ('./views/PointsClass.vue')
    }
    
  ]
})
