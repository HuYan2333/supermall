import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Fastclick from 'fastclick' //去除移动端300ms延迟
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'


Vue.config.productionTip = false

//添加时间总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
Fastclick.attach(document.body)

//使用图片懒加载的插件
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
