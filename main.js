import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {request} from './util/api.js'
import store from 'store/store.js'
import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.prototype.request = request
Vue.prototype.router = router
Vue.use(VueRouter)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,store,router
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif