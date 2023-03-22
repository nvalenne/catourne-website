import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Error404View from "@/views/Error404View.vue";
import AboutView from "@/views/AboutView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    component: AboutView
  },
  {
    path: '*',
    component: Error404View
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
