import Vue from 'vue'
import App from './App.vue'
 import cascader from './lib/index.js'

// import vuePayKeyboard from 'vue-pay-keyboard'
Vue.use(cascader)


new Vue({
  el: '#app',
  render: h => h(App)
})
