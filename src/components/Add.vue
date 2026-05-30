<template>
    <div class="infoCli">
        
        <h3>Information client</h3>
        <form @submit.prevent="submitInfo">

        <!--nom & prenom-->
        <label for="name">Nom:</label><br>
        <input type="text" id="name" required><br><br>
        <label for="fstName">Prenom:</label><br>
        <input type="text" id="fstName" required><br><br>

        <!--numero-->
        <label for="num_loc">Numero tel:</label><br>
        <input type="tel" id="num_loc" v-model="phoneNumber"placeholder="03xxxxxxxx" pattern="^03[23478]\d{7}$" required><br><br>

        <!--voiture-->
        <label for="design_voiture">Voitures disponibles:</label>s
        <select id="design_voiture">
            <option value="toyota">Toyota</option>
            <option value="cytroen">Cytroen</option>
            <option value="peugot">Peugot</option>
            <option value="wolkswagen">Wolkswagen</option>
            <option value="nissan">Nissan</option>
        </select><br><br>

        <!--nb jours-->
        <label for="nb_jrs">Nombre de jours:</label>
        <input type="number" id="nb_jrs" name="jours"  min="1" max="31" value="1"><br><br>

        <!--taux journalier-->
        <label for="taux_journalier">Taux journalier:</label>
        <input type="number" id="taux_journalier" name="taux" value="1"><br><br><br>
        
        <div class="btnPlace">
            <button type="reset" id="reset"><img src="/src/assets/image/icons8-rendez-vous-périodique-20.png"></button>
            <button type="submit" id="submit">envoyer</button>
        </div>
        </form>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const phoneNumber = ref('')
    const submitInfo = ()=> {
        console.log("numero valide:", phoneNumber.value)
    }
</script>
<style scoped>
    .infoCli{
        background-color: #181717ee;
        justify-content: center;
        height: 370px;
        margin-top: 5rem;
        padding: 2rem;
        width: 400px;
        border-radius: 10px;
        color: white;
    }

    #design_voiture{
        width: 8.3rem;
        align-items: center;
    }

    #taux_journalier, #nb_jrs {
        width: 8rem;
    }

    input#nb_jrs {
        margin-left: 2rem;
    }

    input#taux_journalier {
        margin-left: 2.5rem;
    }

    input, select{
        border-radius: 5px;
        font-size: medium;
        /*border: 0;*/
    }

    .btnPlace {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
    }

    button#submit {
        background-color: rgb(7, 97, 7);
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        color: white;
        border-radius: 10px;
        border: 0;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        width: 5rem;
        height: 2rem;
    } 
    
    button#reset {
        border: 0;
        background-color: #fff4f43a;
    }

    button:hover {
        transform: scale(1.1);
    }

    h3 {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid white;
        align-items: center;
        padding: 1rem;
    }
</style>