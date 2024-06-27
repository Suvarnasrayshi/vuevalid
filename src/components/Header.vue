<template>
    <v-app>
      <v-app-bar app>
        <v-toolbar-title>Shopping Web</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">
          User
        </v-btn>
  
        <v-btn text to="/product">
         All Products
        </v-btn>
        <v-btn text to="/catproduct">
          Category
        </v-btn>
        <v-btn text to="/cart">
          Cart
        </v-btn>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  <script setup>


    </script>