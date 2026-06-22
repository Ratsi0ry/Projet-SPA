<template>
    <div class="init">
        <form @submit.prevent="accessControl">
            <h1>Connexion</h1>
            <br><br>
            <input type="text" id="name" v-model="name" placeholder="nom admin" required><br>
            <input type="password" id="pswd" v-model="pswd" placeholder="mot de passe" required>
            <!--<p v-show="incorrect">mdp incorrect</p>-->
            <div id="submit">
                <button @click="connect" class="submitStyle">se connecter</button>
            </div>

            <p v-if="msg" class="messageStyle">{{ msg }}</p>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('')
const pswd = ref('')
const msg = ref('')

const router = useRouter()
const accessControl = async()=>{
    try{
        const response = await fetch('http://localhost:8000/home.php', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify({
                username : name.value,
                pswd : pswd.value
            })
        })

        const result = await response.json()

        setTimeout(() => {
            msg.value = ''
        }, 1500)

        if(result.success) {
            router.push('/add')
        }else{
            msg.value = result.message
        }
        
    }catch(error){
        msg.value = "Impossible de joindre l'API"

        setTimeout(() => {
            msg.value = ''
        }, 1500)
    }
    
}
</script>

<style scoped>
    h1{
        display: flex;
        justify-content: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .init {
        display: flex;
        justify-content: center;
        height: 300px;
        margin-top: 5rem;
    }

    input{
        border: 0;
        border-bottom: 1px solid black;
        padding: 10px;
        font-size: 14px;
        background-color: #f7f7f700;
        width: 50vh;
        margin-bottom: 2rem;
    }

    .submitStyle{
        border: 0;
        background-color: rgb(65, 65, 65);
        color: white;
        padding: 10px;
        border-radius: 10px;
        width: 50vh;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-left: 1rem;
    }

    .submitStyle:hover {
        background-color: green;
        transform: scale(1.1);
    }

    .access{
        text-decoration: none;
        color: white;
        width: 100vh;
    }

    .msgStyle {
        color: white;
        background-color: rgba(2, 82, 2, 0.904);
        border-radius: 5px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: 0.3s ease-in-out;
    }
</style> 