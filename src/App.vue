<script setup>
import {RouterView, RouterLink} from 'vue-router'
</script>

<template>
  <main>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.links{
  padding: 20px;
}

.links a{
  margin: 10px;
  text-decoration: none;
  color: black;
}

.links a:hover{
  color: green;
}
</style>