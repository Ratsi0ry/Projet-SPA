<template>
    <Bar :data="data" :options="options" /><br>
</template>
<script>
import {
    Chart as ChartJs,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'


import { Bar } from 'vue-chartjs';

ChartJs.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
)

export default {
    name: 'App',
    components: {Bar},

    data(){
        return {
            data: {
                labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendreidi', 'Samedi', 'Dimanche'],
                
                datasets:[
                    {data:[25, 18, 20, 10, 14, 38, 40]}
                ] 
            },
            options: {
                responsive:true
            },
            max: ''
        }
    }
}
</script>
<style></style>