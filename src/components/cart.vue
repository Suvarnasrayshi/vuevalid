

<template>
  <v-container>
    <h2>Cart Items</h2>
    <v-row>
      <v-col v-for="item in cartItems" :key="item.id" cols="12" md="4" class="d-flex">
        <v-card class="mx-auto">
          <v-img :src="item.image" height="200px" contain></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>${{ item.price }}</v-card-subtitle>
          <v-btn @click="removeFromCart(item.id)">Remove</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cartItems = computed(() => {
  console.log("Cart items in the store:", store.state.product.cart);
  return store.state.product.cart;
});


onMounted(() => {
  store.dispatch('fetchCart');
});
</script>


