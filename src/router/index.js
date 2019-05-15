import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Systeam from '@/components/Systeam'
import Console from '@/components/Systeams/Console'
import UserMessage from '@/components/Systeams/UserMessage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Systeam',
        name: 'Systeam',
        component: Systeam,
        children:[
            {
                path: '/Systeams/Console',
                name: 'Console',
                component: Console
            },
            {
                path: '/Systeams/UserMessage',
                name: 'UserMessage',
                component: UserMessage
            }
        ]
    }
  ]
})
