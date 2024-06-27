// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)






<template>
  <h1>products</h1>
  <v-select
  v-model="selectedCategory"
  :items="categories"
  label="Select Category"
  @update:model-value="navigateToCategory"
></v-select>
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
        <v-card-text>{{ item.description }}</v-card-text>
        <v-btn>Add to Cart</v-btn>
      </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { computed, onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
   const store = useStore();
   const route = useRoute();
   const router = useRouter();
   const selectedCategory = ref(null);
   const products =computed(()=>{
 return store.state.product.products;
})
const categories =computed(()=>{
 return store.state.product.categories;
})
const category = ref(route.params.data);

   console.log("hello world!!!!",store.state.product.products)
  console.log("category",category)
  
   onMounted( () => {
     store.dispatch('fetchCategories');

      store.dispatch('fetchProductsByCategory', category.value);
   });

   
   const navigateToCategory = () => {
      console.log("selected",selectedCategory.value)
      if (selectedCategory.value) {
        router.push({ name: 'catproduct', params: { data: selectedCategory.value } });
      }
    };
</script>