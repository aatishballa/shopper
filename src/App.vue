<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <v-app>
    <header>
      <div class="wrapper">
        <nav class="d-flex justify-end">
          <router-link to="/" class="mx-2">Home</router-link>
          <router-link to="/about" class="mx-2">About</router-link>
        </nav>
      </div>
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>
