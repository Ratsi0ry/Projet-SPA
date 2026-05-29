<template>
  <div class="app-container">
  <aside class="sidebar">
    <nav>
      <section class="navWelcome"><b>Bienvenue</b></section>
      <ul>
        <li><img src="/src/assets/image/icons8-accueil-24.png"><router-link to="/home">Accueil</router-link></li>
        <li><img src="/src/assets/image/icons8-ajouter-24.png"><router-link to="/add">Ajouter</router-link>></li>
        <li><img src="/src/assets/image/icons8-groupe-24.png"><router-link to="/list">Liste</router-link></li>
        <li><img src="/src/assets/image/icons8-graphique-24.png"><router-link to="/diagramm">Bilan</router-link></li>
      </ul>
    </nav>
  </aside>
  
  <main class="content">
    <header><h1><img src="/src/assets/image/icons8-menu-24.png">Admin</h1>
      <p><img src="/src/assets/image/icons8-sortie-24.png" class="logOut_btn" ></p>
    </header>
    <section class="dashboard-grid">
      <router-view/>
    </section>
  </main>
    </div>
</template>

<script>
  /*export default {
    data() {
    return {
      currentTabName: 'home' //currentTab est le nom des pages
    }
  },
    computed: {
      currentTab(){
        const contents = {
          home:'homeView',
          add:'addView',
          list:'listView',
          diagramm:'diagrammView'
        }
        return contents[this.currentTabName] // affichage du contenu selectionner
      }
    }
  }*/

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
}
header {
  display: flex; 
  height: 60px;
  position: sticky  ;
  background-color: #dbdbdb6b;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.432);
}

main.content{
    padding-top: 0;
    background-color: beige;
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
    border-radius: 7px;
}

/*li:has(button) {
  background-color: aqua;
}*/

li:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.637);
  border-radius: 7px;
  transform: scale(1.1);
}

.navWelcome {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
}

/*.btnNav {
  border: 0;
  background: #ffff;
  padding: 0.5rem;
}*/

h1 {
  font-size: 22px;
  padding: 1rem;
  align-items: center;
  display: flex;
  background-color: #dbdbdb6b;
}

.logOut_btn {
  background-color: #dbdbdb6b; 
  align-items: center; 
  display: flex;
  padding: 0.5rem;
}

.dashboard-grid {
  padding: 1rem;
}
</style>