<!-- <template>
  <h1>products</h1>
  <v-select
  v-model="selectedCategory"
  :items="categories"
  label="Select Category"
  @update:model-value="navigateToCategory"
></v-select>
{{  }}
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
import { onMounted,ref,computed } from "vue";
import { useStore } from "vuex";

const store =useStore();
const category = ref('');
const selectedCategory=ref([])
const products =computed(()=>{
    console.log("dsfgggfdgdrrg",store.state.product.products);
 return store.state.product.products;
})
const categories=computed(()=>{
  return store.state.product.categories;
})
onMounted(()=>{
  console.log("sdfdsgdsgsgsgdsg",selectedCategory.value)
  store.dispatch('fetchCategories');
})
const navigateToCategory=()=>{
  store.dispatch('fetchProductsByCategory',category.value)
}
</script> -->



<template>
  <h1>Products</h1>
  <v-select
    v-model="selectedCategory"
    :items="categories"
    label="Select Category"
    @update:model-value="fetchProducts" 
  ></v-select>
  <v-container>
    <v-row>
      <v-col
        v-for="item in products"
        :key="item.id"
        cols="12"
        md="4"
        class="d-flex"
      >
        <v-card class="mx-auto">
          <v-img :src="item.image" height="200px" contain></v-img>
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
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const selectedCategory = ref(null); 

const products = computed(() => store.state.product.products);
const categories = computed(() => store.state.product.categories);


onMounted(() => {
  store.dispatch('fetchCategories');
});

const fetchProducts=(categories)=>{
if(categories){
  store.dispatch('fetchProductsByCategory',categories);
}
}
</script>

