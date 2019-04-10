import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log(12312312)

new Vue({
  render: h => h(App),
}).$mount('#app')
