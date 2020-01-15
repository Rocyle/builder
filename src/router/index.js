import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {//首页
    path: '/home',
    name: 'home',
    component: Home
  },
  {//登录界面
    path: "/login",
    component: () => import(/* webpackChunkName: "about" */'../views/login/Login.vue')
  },
   {//招工信息界面
    path: "/recruitMsg",
    component: () => import(/* webpackChunkName: "about" */'../views/recruitMsg/RecruitMsg.vue')
  },
  {//工人找活界面
    path: "/workerLook",
    component: () => import(/* webpackChunkName: "about" */'../views/workerLook/WorkerLook.vue')
  },

  {
    path: "*",
    component: () => import("@/components/NotFound")
  },
]

const router = new VueRouter({
  routes
})

export default router
