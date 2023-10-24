import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import Photo from '../views/Photo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/album/:id/photo',
      name: 'albums-photo',
      component: Photo
    },
    { path: '/:pathMatch(.*)*', name: 'users', component: Users }
  ]
})

export default router