<template>
    <div  class="init">
        <form action="login" class="logPage">
            <h2>Login</h2>
            <input type="text" placeholder="nom"><br><br>
            <input type="password" placeholder="mot de passe"><br><br>
            <button @click="connect" class="submitStyle">se connecter</button>
        </form>
    </div>
</template>
<script></script>

<style scoped>
    .init {
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .submitStyle{
    
    }
</style> 