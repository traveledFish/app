import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Footer from './components/comment/Footer2'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'detail',
      component: () => import('./views/detail/index')
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/home/index'),
        footer: Footer
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('./views/detail/index'),
        footer: () => import('./components/detail/detailfooter')
      }
    },
    {
      path: '/classify',
      name: 'classify',
      components: {
        default: () => import('./views/classify/index'),
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/cart/index'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/user/index'),
        footer: Footer
      }
    },
    {
      path: '/nologin',
      name: 'nologin',
      components: {
        default: () => import('./views/nologin/index')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/login/index')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/register/index')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
