import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)


import { createRouter,createWebHistory } from "vue-router"
import Home from './components/Home.vue'
import Add from './components/Add.vue'
import Diagramm from './components/Diagramm.vue'
import List from './components/List.vue'

const routes = [
    {path: '/home', component: Home},
    {path: '/home',component: Home/*, meta: {requiresAuth: true}*/},
    {path: '/add',component: Add/*, meta: {requiresAuth: true}*/},
    {path: '/list', component: List/*, meta: {requiresAuth: true}*/},
    {path: '/diagramm', component: Diagramm/*, meta: {requiresAuth: true}*/}
]

const router  = createRouter({
    history:createWebHistory(),
    routes
})

/*router.beforeEach((to, from, next) => {
    const isConnected = !!localStorage.getItem('token')

    if(to.meta.requiresAuth && !isConnected) {
        next('home')
    }else {
        next()
    }
})*/


app.use(router)
app.mount('#app')

