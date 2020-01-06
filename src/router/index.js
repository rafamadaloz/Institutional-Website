import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Empresa from '../views/Empresa.vue'
import Depoimentos from '../views/Depoimentos.vue'
import Contato from '../views/Contato.vue'
import Poltronas from '../views/Poltronas.vue'
import Colchoes from '../views/Colchoes.vue'
import Colchao from '../views/Colchao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: Empresa
  }, {
    path: '/depoimentos',
    name: 'depoimentos',
    component: Depoimentos
  }, {
    path: '/contato',
    name: 'contato',
    component: Contato
  }, {
    path: '/poltronas',
    name: 'poltronas',
    component: Poltronas
  }, {
    path: '/colchoes',
    name: 'colchoes',
    component: Colchoes
  },
  {
    path: '/colchoes/:id',
    name: 'colchao',
    component: Colchao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
