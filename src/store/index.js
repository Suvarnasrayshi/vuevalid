import { createStore } from "vuex";
import {index} from './modules/users'
import {product} from './modules/products'

export const store =createStore({
  modules: {
    index,
    product
  }})