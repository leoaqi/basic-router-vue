<script setup>
import { useRoute, RouterView } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import carData from '../assets/data.json'

const route = useRoute()

const car = ref(null)
const { id } = route.params

onBeforeMount(() => {
    car.value = carData.find(c => c.id === parseInt(id))
})
</script>

<template>
    <div class="container">
        <div class="card" v-if="car">
            <h1>The Car is: {{ car.make }}</h1>
            <p>Body: {{ car.body }}</p>
            <p>Year: {{ car.year }}</p>
            <p>Price: ${{ car.price }}</p>
            <RouterView />
        </div>
        <div class="card" v-else>
            <h1>Car not found</h1>
        </div>
    </div>
</template>

<style scoped>
.card{
    text-align: center;
}
</style>