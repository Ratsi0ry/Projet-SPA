import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue'
import Add from './components/Add.vue'
import Diagramm from './components/Diagramm.vue'
import List from './components/List.vue'

const routes = [
    {path: '/home', commponent: Home},
    {
        path: '/add',
        commponent: Add,
        meta: {requiresAuth: true}
    },
    {
        path: '/list',
        commponent: List,
        meta: {requiresAuth: true}   
    },
    {
        path: '/diagramm',
        commponent: Diagramm,
        meta: {requiresAuth: true}
    },
    {
        path: '/', redirect: '/home'
    }
]

const router  = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isConnected = !!localStorage.getItem('token')

    if(to.meta.requiresAuth && !isConnected) {
        next('login')
    }else {
        next()
    }
})

export default router