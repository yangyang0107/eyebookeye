import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 设置顶部通知栏高度
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;



const app = new Vue({
    ...App
})
app.$mount()
