import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Add from './components/Add.vue'
import Diagramm from './components/Diagramm.vue'
import List from './components/List.vue'

const app = createApp(App)
app.component('homeView', Home)
app.component('addView',Add)
app.component('diagrammView', Diagramm)
app.component('listView', List)

app.mount('#app')

