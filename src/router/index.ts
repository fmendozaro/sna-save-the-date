import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '@/components/Gallery.vue'
import Home from '@/components/Home.vue'
import Story from '@/components/Story.vue'
import RSVP from '@/components/RSVP.vue'
import Support from '@/components/Support.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/our-story',
      name: 'our-story',
      component: Story
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: RSVP
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: Support
    }
  ]
})

export default router
