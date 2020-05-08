import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '../api/conection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Index.vue')
  },
  {
    name: 'registro',
    path: '/ComReg',
    component: () => import(/* webpackChunkName: "continue" */ '../views/ComReg/Index.vue')

  },
  {
    path: '/',
    name: 'User',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Index.vue')
  },
  {
    name: 'perfil',
    path: '/:nombre',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil/Index.vue'),
    meta: {
      requiresAuth: true
    }

  },
  {
    path: '*',
    name: 'not_found',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error/Index.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser) next('/login')
  else next()
})

export default router
