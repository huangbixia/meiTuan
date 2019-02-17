import Vue from 'vue'
import './cube-ui' // 引入cube-ui插件
import App from './App.vue'
import './register'   // 引入全局组件

import './common/stylus/index.styl' // 引入样式文件

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
