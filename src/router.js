import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: () => import('./views/Homepage.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/my-information',
      name: 'MyInformation',
      component: () => import('./views/MyInformation.vue')
    },
    {
      path: '/menu-detail',
      name: 'MenuDetail',
      component: () => import('./components/menu/MenuDetail.vue')
    },
    {
      path: '/my-order',
      name: 'MyOrder',
      component: () => import('./views/MyOrder.vue')
    }
  ]
})
