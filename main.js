import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import config from "./config.js"
Vue.prototype.$config=config

const app = new Vue({
    ...App
})
app.$mount()
