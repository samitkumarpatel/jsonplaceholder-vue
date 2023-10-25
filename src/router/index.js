import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import Photo from '../views/Photo.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    { path: '/404', name: 'notfound', component: NotFound },  
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound }
  ]
})

export default router