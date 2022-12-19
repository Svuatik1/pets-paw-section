import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/Home.vue'

export const homeRoutesNames = {
  home: 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: homeRoutesNames.home,
    component: Home
  }
]
