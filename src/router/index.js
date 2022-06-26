import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import logIn from '@/components/logIn.vue'
import signUp from '@/components/signUp.vue'
import _404 from '@/components/404.vue'
import singlePage from '@/components/singlePage.vue'
import basket from '@/components/basket.vue'
import dashbord from '@/components/dashbord.vue'
import orderHistory from '@/components/orderHistory.vue'
import checkout from '@/components/checkout.vue'
import setting from '@/components/setting.vue'
import preferences from '@/components/preferences.vue'
import addressbook from '@/components/addressbook.vue'
import process from '@/components/process.vue'
import downloadinvoice from '@/components/downloadinvoice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/404',
      name: '404',
      component: _404
    },
    {
      path: '/singlePage',
      name: 'singlePage',
      component: singlePage
    },
    {
      path: '/basket',
      name: 'basket',
      component: basket
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: dashbord
    },
    {
      path: '/orderHistory',
      name: 'orderHistory',
      component: orderHistory
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: preferences
    },
    {
      path: '/addressbook',
      name: 'addressbook',
      component: addressbook
    },
    {
      path: '/process',
      name: 'process',
      component: process
    },
    {
      path: '/downloadinvoice',
      name: 'downloadinvoice',
      component: downloadinvoice
    },
   
  ]
})
