import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categoria from '../views/Categoria.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categoria
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
