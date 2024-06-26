<template>
  <h1>how are you al doing !!!</h1>
  <v-text-field label="fname" v-model="fname" name="fname" variant="outlined"></v-text-field>
  <v-text-field label="email" v-model="email" name="email" variant="outlined"></v-text-field>
  <v-btn @click="getdata">click</v-btn>
  <v-divider></v-divider>
  {{ fname }}
</template>
<script setup>
import {  ref } from "vue";
import { useStore } from "vuex";
const store = useStore()

const fname=ref("");
const email=ref("");

const getdata=()=>{
store.dispatch("getName",{fname:fname.value})
console.log("FIRST NAME:",fname.value,"EMAIL:",email.value)
console.log(store.state.index.fname);
}
</script>