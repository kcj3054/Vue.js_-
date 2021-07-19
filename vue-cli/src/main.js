import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //import App해서 불러 온 것을 render를 한다 , App이라는 컴포넌트 
  render: h => h(App),   
}).$mount('#app')
