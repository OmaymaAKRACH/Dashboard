import Home from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import { createRouter, createWebHistory } from "vue-router";

const ROUTES = {
  loginRoute: {
    path: '/',
    name: 'loginForm',
    component: Login
  },
  homeRoute: {
    path: '/home',
    name: 'homePage',
    component: Home
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // feel free to add more routes here (yeah, and your root '/' route too :) )
    {
      path: ROUTES.loginRoute.path,
      name: ROUTES.loginRoute.name,
      component: ROUTES.loginRoute.component

    },
    {
      path: ROUTES.homeRoute.path,
      name: ROUTES.homeRoute.name,
      component: ROUTES.homeRoute.component
    },
  ]
});
export default router;
