import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tomapedidos from '../views/Tomapedidos.vue'
import Pastelero from '../views/Pastelero.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Tomapedidos',
    name: 'Tomapedidos',
    component: Tomapedidos
  },
  {
    path: '/Pastelero',
    name: 'Pastelero',
    component: Pastelero
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
