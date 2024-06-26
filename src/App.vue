<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Shopping Web</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">
        Users
      </v-btn>
     
     <v-btn text to="/product">
      Product
     </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>

</script>
