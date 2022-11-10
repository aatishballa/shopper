<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <v-app>
    <header>
      <div class="wrapper">
        <nav>
          <router-link to="/" datatype="" about="">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>
