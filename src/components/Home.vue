<template>
    <div class="init">
        <form>
            <h1>Login</h1>
            <br><br>
            <input type="text" id="nom" placeholder="nom admin" required><br>
            <input type="password" id="pswd" placeholder="mot de passe" required>
            <!---<p v-if="error" style="color: red;">Mot de passe incorrect !</p>-->
            <div id="submit"><button @click="connect" class="submitStyle"><b>se connecter</b></button></div>
        </form>
    </div>
</template>
<script>
    /*import {ref} from 'vue'
    import {useRouter} from 'vue-router'

    const pswd = ref('')
    const error = ref(false)
    const router = useRouter()

    const vericatioPswd = () => {
        if(pswd.value == '1234') {
            localStorage.setItem('token', 'token-valide')
            router.push('/home')
        } else {
            error.value = true
        }
    }*/
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

    #submit{
        display: flex;
        justify-content: flex-end;
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
        background-color: green;
        color: white;
        padding: 10px;
        border-radius: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style> 