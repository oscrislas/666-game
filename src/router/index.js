import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ConRegistro',
    name: 'ConReg',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComReg/Index.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil/Index.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Index.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

/*
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('/')
  else next()
})
*/
export default router
