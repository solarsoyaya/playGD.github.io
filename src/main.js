import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem, Tabbar, TabbarItem, Toast, Button, Picker, DatetimePicker } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(SwipeItem)
Vue.use(Picker)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(DatetimePicker)
Vue.config.productionTip = false
Vue.directive('clickout', {
  inserted (el, binding) {
    // 记录点击次数的变量
    let clickCount = 0
    // 定义点击事件处理函数
    el.clickOutsideEvent = function (event) {
      clickCount++
      // 第一次点击不触发绑定方法
      if (clickCount === 1) {
        return
      }
      // 检查点击事件是否发生在元素的外部
      if (!(el === event.target || el.contains(event.target))) {
        // 如果点击事件发生在元素的外部，则触发指令绑定的方法
        binding.value(event)
      }
    }
    // 在文档上添加点击事件监听器
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    // 在元素上解除点击事件监听器
    document.removeEventListener('click', el.clickOutsideEvent)
  }

}

)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
