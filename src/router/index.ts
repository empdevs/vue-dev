import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserView from '@/views/user/UserView.vue';
import HomeView from '@/views/HomeView.vue';
import MainView from '@/views/MainView.vue';
import CreateUserView from '@/views/user/CreateUserView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
    children:[
      {
        path: '/Home',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/User',
        name: 'User',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => UserView,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/CreateUser',
        name: 'CreateUser',
        component: CreateUserView,
      },
      {
        path: '/About',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      },
      {
        path: 'About/:id',
        name: 'AboutDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
    ],
  },
]
console.log(process.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router