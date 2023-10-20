import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import User from '../views/User.vue'

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
    }
  ]
})

export default router