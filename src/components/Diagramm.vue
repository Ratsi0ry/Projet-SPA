<template>
    <div class="container">
        <div class="stats">
            <div class="stat-card">
                <h3>Min: {{ stats.minLoyer }} Ar</h3>
            </div>
            <div class="stat-card">
                <h3>Max: {{ stats.maxLoyer }} Ar</h3>
            </div>
            <div class="stat-card">
                <h3>Moyenne: {{ stats.moyenneLoyer }} Ar</h3>
            </div>
            <div class="stat-card">
                <h3>Total: {{ stats.totalClients }}</h3>
            </div>
        </div>

        <div class="chart-wrapper">
            <Pie :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJs.register(ArcElement, Tooltip, Legend);

const stats = ref({
    minLoyer: 0,
    maxLoyer: 0,
    totalClients: 0,
    moyenneLoyer: 0
});

const colors = [
    'blue',
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 206, 86, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(153, 102, 255, 0.7)'
];

const chartData = ref({
    labels: [],
    datasets: [{
        label: 'Locations',
        data: [],
        backgroundColor: colors,
        borderColor: colors.map(c => c.replace('0.7', '1')),
        borderWidth: 2
    }]
});

const chartOptions = ref({ 
    responsive: true,
    plugins: {
        legend: { display: true }
    }
});

const fetchStats = async() => {
    const response = await fetch('http://localhost:8000/stats.php');
    const result = await response.json();
    
    if(result.status === 'success') {
        stats.value = result.data;
        chartData.value = {
            labels: result.data.parVoiture.map(v => v.car),
            datasets: [{
                label: 'Locations',
                data: result.data.parVoiture.map(v => v.count),
                backgroundColor: colors,
                borderColor: colors.map(c => c.replace('0.7', '1')),
                borderWidth: 2
            }]
        };
    }
};

onMounted(() => fetchStats());
</script>

<style scoped>
.container {
    padding: 1rem;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
    height: 6rem;
}

.stat-card {
    /*background: #b4b5b8;*/
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    border-radius: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.stat-card h3 {
    margin: 0;
    font-size: 16px;
}

.chart-wrapper {
    max-width: 400px;
    margin: 0 auto;
}

canvas{
    width: 100% ;
    height: 250px t;
}
</style>