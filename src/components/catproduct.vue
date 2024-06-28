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
      <v-col v-for="item in products" :key="item.id"
      cols="12"
      md="3"
      class="d-flex">
        <v-card class="mx-auto">
          <v-img :src="item.image"
          height="200px"
          contain></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>${{ item.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn @click="openDialog(item)">View Details</v-btn>
            <v-btn>Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>{{ selectedItems.title }}</v-card-title>
        <v-card><v-img :src="selectedItems.image"
          height="200px"
          contain></v-img></v-card>
        <v-card-text>
          {{ selectedItems.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const selectedCategory = ref(null); 

const products = computed(() => store.state.product.products);
const categories = computed(() => store.state.product.categories);

const selectedItems=ref([]);
const dialog=ref(false);

const openDialog=(item)=>{
selectedItems.value=item;
dialog.value=true;
}

onMounted(() => {
  store.dispatch('fetchCategories');
});

const fetchProducts=(categories)=>{
if(categories){
  store.dispatch('fetchProductsByCategory',categories);
}
}
</script>

