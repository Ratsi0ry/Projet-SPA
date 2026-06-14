import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Add from './components/Add.vue'
import Diagramm from './components/Diagramm.vue'
import List from './components/List.vue'

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/add',component: Add},
    {path: '/list', component: List},
    {path: '/diagramm', component: Diagramm}
]

const router  = createRouter({
    history:createWebHistory(),
    routes
})

//affichage de home comme default main page au demarrage seeion utilisateur
router.beforeEach((to, from, next) => {

    const connected = sessionStorage.getItem('connected')
    
    if (!connected) {
        sessionStorage.setItem('connected', 'true')
        if (to.path !== '/') {
            return next('/')
        }
    }
    next()
})

app.use(router)
app.mount('#app')

