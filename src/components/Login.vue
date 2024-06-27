  <template>
    <v-container class="fill-height">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-center">Login</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" v-model="name" name="name" outlined></v-text-field>
                <v-text-field label="Password" v-model="password" name="password" outlined></v-text-field>
                <v-btn color="primary" @click="getdata">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script setup>
  import {  ref } from "vue";
  import { useStore } from "vuex";
  const store = useStore()

  const name=ref("");
  const password=ref("");

  const getdata=async()=>{
  await store.dispatch('login', { username: name.value, password: password.value });
  }
</script>