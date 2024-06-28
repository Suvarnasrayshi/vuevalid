import { createRouter,createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Product from './components/Product.vue'
import catproduct from './components/catproduct.vue'
import cart from './components/cart.vue'
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
    name:'catproduct',
    path: '/catproduct',
    component: catproduct
  },
  {
    name:'cart',
    path: '/cart',
    component: cart
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