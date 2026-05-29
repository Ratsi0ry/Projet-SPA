<template>
    <h2>Login</h2>
    <form action="login">
        <input type="text" v-model="name" required>
        <input type="password" v-model="psswd" required>
        <button @click="connect">se connecter</button>
    </form>
</template>
<script></script>
<style scoped>
</style>