import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import messagesEn from '../lang/en'
// import messagesZh from '../lang/zh'

// const messages = {
//   en: {
//     message: messagesEn
//   },
//   zh: {
//     message: messagesZh
//   }
// };
//
// export default messages
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
