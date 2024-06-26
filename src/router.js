import { createRouter,createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Product from './components/Product.vue'
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;