import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Preguntas',
    component: () => import('../views/Preguntas.vue')
  },
  {
    path: '/listado',
    name: 'Listado',
    component: () => import('../views/Listado.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import('../views/Agregar.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import('../views/Editar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
