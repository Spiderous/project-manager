import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  }
]

const router = new VueRouter({
  routes
})

export default router
