<template>
    <div  class="init">
        <form action="login">
            <h2>Login</h2>
            <br><br>
            <input type="text" placeholder="nom" required><br>
            <input type="password" placeholder="mot de passe" required>
            <div id="submit"><button @click="connect" class="submitStyle"><b>se connecter</b></button></div>
        </form>
    </div>
</template>
<script>
</script>

<style scoped>
    h2{
        display: flex;
        justify-content: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .init {
        display: flex;
        justify-content: center;
        background-color: beige;
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
        background-color: beige;
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