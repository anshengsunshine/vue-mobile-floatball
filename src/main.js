import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.prototype.$url = "http://localhost:8010"
Vue.prototype.$url = 'http://' + window.location.host

new Vue({
    render: h => h(App),
}).$mount('#app')
