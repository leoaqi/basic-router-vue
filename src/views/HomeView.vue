<script setup>
import carsData from '../assets/data.json'
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const cars = ref(carsData)
const make = ref("")

onMounted(() => {
  console.log(route.query)
  make.value = route.query.make || ""
})

watch(make, () => {
  if(make.value){
    if(make.value === "All"){
      cars.value = carsData
    }else {
      cars.value = carsData.filter(c => c.make === make.value)
    }
  }
})

const handleChange = () => {
  router.push({query: {make: make.value}})
}


</script>

<template>
  <main class="container">
    
    <h1>Cars</h1>
    <select @change="handleChange" v-model="make">
      <option value="All">All</option>
      <option value="Chevrolet">Chevrolet</option>
      <option value="Buick">Buick</option>
      <option value="Porsche">Porsche</option>
      <option value="Audi">Audi</option>
    </select>
    <div class="cards">
      <div class="card" v-for="car in cars" :key="car.id" @click="router.push(`/car/${car.id}`)">
        <h1>{{ car.make }}</h1>
        <h1>{{ car.body }}</h1>
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
  text-decoration: none;
  text-align: center;
}

.card:hover{
  border: 1px solid rgb(4, 249, 4);
}
</style>