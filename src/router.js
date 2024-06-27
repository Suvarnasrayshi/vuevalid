import { createRouter,createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Product from './components/Product.vue'
import Categrory from './components/Category.vue'
import catproduct from './components/catproduct.vue'
import PageNotFound from './components/PageNotFound.vue'
const routes = [
  {
    name:'Login',
    path: '/',
    component: Login
  },
  {
    name:'Product',
    path: '/product',
    component: Product
  },
  {
    name:'Categrory',
    path: '/category',
    component: Categrory
  },
  {
    name:'catproduct',
    path: '/catproduct',
    component: catproduct
  },
  {
    name:'pagenotfound',
    path:'/:pathMatch(.*)*',
    component:PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;