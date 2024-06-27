<template>
  <h1>hello</h1>
</template>
<script setup>
import { useRoute } from "vue-router";

const route=useRoute();
const category=route.params.data;
console.log('category',category)
</script>