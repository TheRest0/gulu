import Vue from 'vue'
import App from './App.vue'
import Button from './components/button.vue'
import Icon from './components/icon.vue'
import ButtonGroup from './components/buttonGroup.vue'
import Input from './components/input.vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


