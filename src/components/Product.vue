<template>
  <v-container>
    <v-row>
      <v-col v-for="item in products" :key="item.id"
      cols="12"
      md="4"
      class="d-flex">
      <v-card class="mx-auto">
        <v-img :src="item.image"
        height="200px"
        contain></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>${{ item.price }}</v-card-subtitle>
        <!-- <v-card-text>{{ item.description }}</v-card-text> -->
        <v-btn>Add to Cart</v-btn>
      </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { onMounted,computed } from "vue";
import { useStore } from 'vuex';
const store = useStore();
const products =computed(()=>{
 return store.state.product.products;
})
onMounted(() => {
 store.dispatch("fetchProducts");
 console.log("products:",store.state.product.products);
});

</script>
