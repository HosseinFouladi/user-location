import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/Users.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersList,
    },

  ],
})

export default router
