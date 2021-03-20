import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/Home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/Home'
      },
      {
        path: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'Reservation',
        component: () => import('@/views/Reservation.vue')
      },
      {
        path: 'ResaInfo',
        component: () => import('@/views/ResaInfo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
