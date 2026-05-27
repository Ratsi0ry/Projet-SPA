<template>
  <div class="app-container">
  <aside class="sidebar">
    <nav>
      <section class="navWelcome"><b>Bienvenue</b></section>
      <ul>
        <li><button @click="value =! value">Accueil</button></li>
        <li><button @click="nvalue =! nvalue">Ajouter</button></li>
        <li><button @click="nvalue =! nvalue">Liste</button></li>
        <li><button @click="nvalue =! nvalue">Bilan</button></li>
      </ul>
    </nav>
  </aside>
  
  <main class="content">
    <header><h1 style="font-size: 22px;">Dashboard</h1></header>
    <section class="dashboard-grid">
      <component :is="active"></component>
      </section>
  </main>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        value:false
      }
    },
    computed: {
      active() {
        if(this.value){
          return 'comp-one'
        }
      }
    }
  }

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
header {
  display: flex; 
  height: 60px;
  position: sticky  ;
  border-radius: 15px;
  background-color: #dbdbdb;
}

main.content{
    padding-top: 0;
    background-color: #dbdbdb;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 150px;
  color: black; 
  padding: 1rem;
  position: sticky;
}

.content {
  flex: 1;
  padding: 1rem;
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
    gap: 1rem;
}

.navWelcome {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
}

</style>