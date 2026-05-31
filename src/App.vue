<template>
  <div class="app-container">
  <aside class="sidebar">
    <nav>
      <section class="navWelcome"><b>Dashboard</b></section>
      <ul>
        <li><img src="/src/assets/image/icons8-accueil-24.png"><router-link to="/home">Accueil</router-link></li>
        <li><img src="/src/assets/image/icons8-ajouter-24.png"><router-link to="/add">Ajouter</router-link></li>
        <li><img src="/src/assets/image/icons8-liste-24.png"><router-link to="/list">Liste</router-link></li>
        <li><img src="/src/assets/image/icons8-graphique-24.png"><router-link to="/diagramm">Bilan</router-link></li>
      </ul>
    </nav>
  </aside>
  
  <main class="content">
    <header><h1><img src="/src/assets/image/icons8-menu-24.png"><router-view>{{ title }}</router-view></h1>
      <p><img src="/src/assets/image/icons8-sortie-24.png" class="logOut_btn" ></p>
    </header>
    <section class="dashboard-grid">
      <router-view></router-view>
      </section>
  </main>
    </div>
</template>

<script setup>
  import {ref, watch} from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  console.log(route)
  const title = ref('')

  watch(
    ()=> route.path,
    (newPath)=> {
      if(newPath == '/home') title.value = 'Accueil'
      if(newPath == '/add') title.value = 'Ajouter'
      if(newPath == '/list') title.value = 'Liste'
      if(newPath == '/diagramm') title.value = 'Bilan'
    },
    {immediate:true}
    )
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  width: 100vh;
}

header {
  display: flex; 
  height: 60px;
  position: sticky  ;
  background-color: #dbdbdb3a;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.432);
}

main.content{
    padding-top: 0;
    background-color: #dbdbdb3a;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 160px;
  color: black; 
  padding: 1rem;
  position: sticky;
}

.content {
  flex: 1;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem
  ;
}

nav li {
    margin-bottom: 1rem;
    margin-top: 6rem;
    list-style: none;
}

li {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.3rem;
}

li:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.637);
  border-radius: 12px;
  transform: scale(1.1);
}

a {
  text-decoration: none;
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navWelcome, h1  {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 22px;
}

.btnNav {
  border: 0;
  background: #ffff;
  padding: 0.5rem;
}

h1 {
  font-size: 22px;
  padding: 1rem;
  align-items: center;
  display: flex;
  gap: 0.2rem;
}

.logOut_btn {
  align-items: center; 
  display: flex;
  padding: 0.5rem;
}

.dashboard-grid {
  padding: 1rem;
}
</style>