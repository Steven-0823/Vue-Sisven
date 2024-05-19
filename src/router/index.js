import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categoria from '../views/Categoria.vue'
import EditarCategoria from '../components/Categoria/EditarCategoria.vue'
import NewCategoria from '../components/Categoria/NewCategoria.vue'
import PayMode from '../views/PayMode.vue'
import EditarPayMode from '../components/PayMode/EditarPayMode.vue'
import NewPayMode from '../components/PayMode/NewPayMode.vue'
import Customer from '../views/Customer.vue'
import EditarCustomer from '../components/Customer/EditarCustomer.vue'
import NewCustomer from '../components/Customer/NewCustomer.vue'

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
  },
  {
    path: '/categorias/editar/:id',
    name: 'EditarCategoria',
    component: EditarCategoria
  },
  {
    path: '/categorias/nueva',
    name: 'NewCategoria',
    component: NewCategoria
  },
  {
    path: '/paymodes',
    name: 'paymodes',
    component: PayMode
  },
  {
    path: '/paymodes/editar/:id',
    name: 'EditarPayMode',
    component: EditarPayMode
  },
  {
    path: '/paymodes/nueva',
    name: 'NewPayMode',
    component: NewPayMode
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customer
  },
  {
    path: '/customers/editar/:id',
    name: 'EditarCustomer',
    component: EditarCustomer
  },
  {
    path: '/customers/nueva',
    name: 'NewCustomer',
    component: NewCustomer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
