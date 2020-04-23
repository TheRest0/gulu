import Vue from 'vue'
import App from './App.vue'
import Button from './components/button.vue'
import Icon from './components/icon.vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
