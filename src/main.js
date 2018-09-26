// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AlertPlugin, ToastPlugin, AjaxPlugin } from 'vux'
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZhCHS from './lang/zh'
import axios from 'axios'

Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  messages: {
    'en': LangEn,
    'zh-CN': LangZhCHS
  }
})
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
