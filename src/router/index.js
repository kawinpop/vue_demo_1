import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1_Intro.vue'
import Demo2 from '../views/Demo2_EventMethod.vue'
import Demo3 from '../views/Demo3_Data.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: Demo3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
