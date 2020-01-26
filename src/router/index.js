import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index/Home.vue'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

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
  {//个人中心界面
    path: "/personal",
    component: () => import(/* webpackChunkName: "about" */'../views/personal/Personal.vue')
  },
  {//发布招工信息
    path: "/sendRecruit",
    component: () => import(/* webpackChunkName: "about" */'../views/sendRecruit/SendRecruit.vue')
  },
  {//发布找工信息
    path: "/sendLookWork",
    component: () => import(/* webpackChunkName: "about" */'../views/sendLookWork/SendLookWork.vue')
  },
  {//发布找工基础信息
    path: "/workBaseMsg",
    component: () => import(/* webpackChunkName: "about" */'../views/workBaseMsg/WorkBaseMsg.vue')
  },
  {//发布人员信息
    path: "/addIntroduce",
    component: () => import(/* webpackChunkName: "about" */'../views/addIntroduce/AddIntroduce.vue')
  },
  {//发布工作经验
    path: "/workExperience",
    component: () => import(/* webpackChunkName: "about" */'../views/workExperience/WorkExperience.vue')
  }, {//热门资讯展示
    path: "/hotNews",
    component: () => import(/* webpackChunkName: "about" */'../views/hotNews/HotNews.vue')
  }, {//热门资讯详情
    path: "/newsDetail",
    component: () => import(/* webpackChunkName: "about" */'../views/newsDetail/NewsDetail.vue')
  },
  {
    path: "*",
    component: () => import("@/components/NotFound")
  },
]

const router = new Router({
  routes
})

export default router
