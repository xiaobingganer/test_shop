import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const msite = r => require.ensure([], () => r(require('@/pages/Msite/MsitePage')), 'MsitePage')
const search = r => require.ensure([], () => r(require('@/pages/Search/SearchPage')), 'SearchPage')
const order = r => require.ensure([], () => r(require('@/pages/Order/OrderPage')), 'OrderPage')
const profile = r => require.ensure([], () => r(require('@/pages/Profile/ProfilePage')), 'ProfilePage')
const login = r => require.ensure([], () => r(require('@/pages/Login/LoginPage')), 'LoginPage')


export default new VueRouter({
  routes: [{
      path: '/msite',
      component: msite,
      // 控制是否显示底部栏
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: login
    },
  ]
})
