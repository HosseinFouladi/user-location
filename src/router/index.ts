import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/users/Users.vue'
import UserDetails from '@/views/users/UserDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersList,
    },
    {
      path: '/user/:id',
      name: 'user deatils',
      component: UserDetails,
    },

  ],
})

export default router
