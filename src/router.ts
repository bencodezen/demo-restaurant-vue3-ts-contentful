import { createRouter, createWebHashHistory } from 'vue-router'

import AboutPage from './pages/AboutPage.vue'
import GalleryPage from './pages/GalleryPage.vue'
import HomePage from './pages/HomePage.vue'
import MenuPage from './pages/MenuPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/gallery',
    component: GalleryPage
  },
  {
    path: '/menu',
    component: MenuPage
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
