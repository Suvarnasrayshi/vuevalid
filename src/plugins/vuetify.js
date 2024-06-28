// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)










async fetchCart({ commit }) {
  try {
    const response = await fetch('https://fakestoreapi.com/carts');
    const cart = await response.json();
    // console.log("cart action details:", cart);
   await Promise.all(cart.map(async (cart) => {
      // console.log("cartdata", cart.products)
    await Promise.all(cart.products.map(async (products) => {
        // console.log("cartdataiddata", products.productId)
        const response = await fetch(`https://fakestoreapi.com/products/${products.productId}`)
        const cartdata = await response.json()
      
        commit('SET_CART', { cart: cartdata });
      }))
    }))
  } catch (error) {
    console.error('error in fetching of the cart details', error)
  }
}

}

<template>
    <h2>Cart Items</h2>

</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cartItems = computed(() => {
  console.log("cart vue data",store.state.product.cart);
  return store.state.product.cart;
});
console.log(cartItems);
onMounted(() => {
  store.dispatch('fetchCart');
});
</script>


