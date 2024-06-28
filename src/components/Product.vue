<template>
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
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => store.state.product.products);

const dialog=ref(false);
const selectedItems=ref([]);

const openDialog=(item)=>{
  selectedItems.value=item
  dialog.value=true
}

onMounted(() => {
  store.dispatch("fetchProducts");
  console.log("products:", store.state.product.products);
});
</script>