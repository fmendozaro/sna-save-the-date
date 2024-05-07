import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gallery from '@/components/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/our-story',
      name: 'our-story',
      component: HomeView
    },
    {
      path: '/registry',
      name: 'registry',
      component: HomeView
    },
    {
      path: '/travel-faqs',
      name: 'travel-faqs',
      component: HomeView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: HomeView
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
