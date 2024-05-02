import { createRouter, createWebHistory } from 'vue-router'
import GrayScaleDemo from '../views/GrayScaleDemo.vue'
import ChangeTemperatureDemo from '../views/ChangeTemperatureDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/change_temperature',
      name: 'change_temperature',
      component: ChangeTemperatureDemo
    },
    {
      path: '/gray_scale',
      name: 'gray_scale',
      component: GrayScaleDemo
    }
  ]
})

export default router
