import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'
import WXrequest from './utils/wx-request'
Vue.prototype.$httpWX = WXrequest
var fly=new Fly
Vue.prototype.$http=fly //将fly实例挂在vue原型上
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
