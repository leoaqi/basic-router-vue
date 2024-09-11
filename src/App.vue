<script setup>
import {RouterView, RouterLink} from 'vue-router'
</script>

<template>
  <main>
    <div class="links">
      <RouterLink active-class="active" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
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
}

.links a:hover{
  color: green;
}

.active{
  font-weight: bolder;
  color: green;
}
</style>