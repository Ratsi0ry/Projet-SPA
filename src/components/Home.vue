<template>
    <div class="init">
        <form>
            <h1>Connexion</h1>
            <br><br>
            <input type="text" id="name" placeholder="nom admin" required><br>
            <input type="password" id="pswd" v-model="input_pswd" placeholder="mot de passe" required>
            <p v-show="incorrect">mdp incorrect</p>
            <div id="submit"><button @click="connect" class="submitStyle"><b>se connecter</b></button></div>
        </form>
    </div>
</template>
<script setup>
    
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

    /*#submit{
        display: flex;
        justify-content: flex-end;
    }*/

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
</style> 