import Vue from "vue";

import App from "./App.vue";
import router from "./router/index";

import "@/assets/style/index.less";
// import mixin from "./mixin/index";
import store from "./store/index";

import "@/components/Vant";
// rem
import "amfe-flexible";
// 引入axios，并加到原型链中
// import axios from 'axios';
// Vue.prototype.$axios = axios;
// import {fetchGet,fetchPost } from  "@/utils/request.js"
// Vue.prototype.$fetchGet = fetchGet;
// Vue.prototype.$fetchPost  = fetchPost ;



Vue.config.productionTip = false;
import { format } from "path";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
