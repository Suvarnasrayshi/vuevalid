<template>
 <v-row>
    <p v-for="items in product" :key="items.id">
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>{{items.title}}</v-card-title>

          <v-card-subtitle>{{items.price}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
        {{items.description}}
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">{{items.rating.rate}}</div>
    </v-col>
    </p>
  </v-row>  
<ul>
  <li>
  
  
  </li>
</ul>
</template>
<script setup>
import { onMounted, ref } from "vue";

const product =ref([]);
onMounted(async()=>{
  const response = await fetch ('https://fakestoreapi.com/products');
  product.value=await response.json();
  console.log("product detail:",product.value)
})
</script>