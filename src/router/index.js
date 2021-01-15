import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/dashboard.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/usuarios.vue')
  },
  {
    path: '/api',
    name: 'API',
    component: () => import('../views/api.vue')
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import('../views/configuracion.vue')
  },
  {
    path: '/cuenta',
    name: 'Cuenta',
    component: () => import('../views/configuracion2.vue')
  },
  {
    path: '/configuser/:id',
    name: 'Configuracion User',
    component: () => import('../views/configuracionuser.vue')
  },
  {
    path: '/crearapi',
    name: 'Crear API',
    component: () => import('../views/generarApi.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
