// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.withCredentials=false
Vue.prototype.axios=axios

Vue.filter("datetimeFilter",function(val){
  //val 当前日期对象
  //1:新创建日期对象
  var data = new Date(val);
  //2:获取年月日时分秒
  var y = data.getFullYear();
  var m = data.getMonth()+1;
  var d = data.getDate();
  // var h = data.getHours();
  // var mi = data.getMinutes();
  // var s = data.getSeconds();
  //3:拼接字符串
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  // return `${y}-${m}-${d} ${h}:${mi}:${s}`;
  return `${y}-${m}-${d}`;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
