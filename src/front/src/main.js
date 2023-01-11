import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue앱이 처음 실행될 때 나오는 경고문(배포에 대한 팁)을 출력할 것인지 물어보는 내용(default - false)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
