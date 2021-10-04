import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    const user = Firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
