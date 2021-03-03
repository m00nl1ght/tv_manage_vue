import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store'

import Main from '../views/Main.vue'
import Screens from '../views/Screens.vue'
import Content from '../views/Content.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {layout: 'empty'},
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    meta: {layout: 'main', requiresAuth: true},
    component: Main
  },
  {
    path: '/screen',
    name: 'screen',
    meta: {layout: 'main', requiresAuth: true},
    component: Screens
  },
  {
    path: '/content',
    name: 'content',
    meta: {layout: 'main', requiresAuth: true},
    component: Content
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters['user/isAuth']){
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router

