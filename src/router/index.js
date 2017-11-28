import Vue from 'vue'
import Start from '@/components/Start/Start'
import Plan from '@/components/Plan/Plan'
import UserPage from '@/components/UserPage/UserPage'
import Search from '@/components/Search/Search'
import Destination from '@/components/Destination/Destination'
import Comment from '@/components/Comment/comment'
import UserList from '@/components/UserList/UserList'
import Impress from '@/components/impress/impress'


import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',redirect: '/start'
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/plan/:cid',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/userPage/:uid',
      name: 'userPage',
      component: UserPage
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    {
      path: '/userList',
      name: 'userList',
      component: UserList
    },
    {
      path: '/impress',
      name: 'impress',
      component: Impress
    },

  ]
})
