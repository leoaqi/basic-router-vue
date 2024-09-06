<script setup>
import carsData from '../assets/data.json'
import { ref } from 'vue'

const cars = ref(carsData)
</script>

<template>
  <main class="container">
    
    <h1>Cars</h1>
    <div class="cards">
      <div class="card" v-for="car in cars" :key="car.id">
        <h1>{{ car.make }}</h1>
        <p>${{  car.price }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cards{
  display: flex;
  /* width: 1000px; */
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.card{
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 8px 10px grey;
}

.card:hover{
  border: 1px solid rgb(4, 249, 4);
}
</style>