import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../views/home/'

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contact/'),
      },
      {
        path: '/tools',
        name: 'Tools',
        component: () => import('../views/tools/'),
      },
      {
        path: '/tools/calc',
        name: 'Calculator',
        component: () => import('../views/tools/calc'),
      },
      {
        path: '/tools/todo',
        name: 'Todo',
        component: () => import('../views/tools/todo'),
      },
    ],
  })
