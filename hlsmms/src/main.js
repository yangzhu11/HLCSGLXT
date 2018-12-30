import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 引入home.vue样式
import "./assets/style/public.css"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
