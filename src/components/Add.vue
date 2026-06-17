<template>

    <img src="/src/assets/image/location-de-voitures.png" class="icon">

    <div class="infoCli">
        <form @submit.prevent="submitInfo">
        <p><b>Information du client:</b></p>

        <!--nom & prenom-->
        <input type="text" id="name" v-model="name" placeholder="nom"><br><br>
        <input type="text" id="fstName" v-model="fstName" placeholder="prenom"><br><br>

        <!--numero-->
        <input type="tel" id="num_loc" v-model="tel" name="num_loc" placeholder="numero teléphone" required><br><br>

        <!--voiture-->
        <label for="design_voiture">Voitures disponibles:</label>
        <select id="design_voiture" v-model="car">
            <option value="peugot">Peugot 206 - 80 000 Ar</option>
            <option value="dacia duster">Dacia Duster - 95 000 Ar</option>
            <option value="suzuki">Suzuki Grand Vitara - 120 000 Ar</option>
            <option value="toyota">Toyota Prado - 140 000 Ar</option>
            <option value="starex">Hyundai starex - 150 000 ar</option>
        </select><br><br>

        <!--nb jours-->
        <label for="nb_jrs">Nombre de jours:</label>
        <input type="number" id="nb_jrs" v-model.number="days" name="jours"  min="1" max="31" value="1"><br><br>

        <!--taux journalier-->
        <label for="taux_journalier">Taux journalier:</label>
        <input type="number" id="taux_journalier" v-model.number="rate" name="taux" value="1"><br><br><br>
        
        <div class="btnPlace">
            <button type="reset" id="reset"><img src="/src/assets/image/icons8-rendez-vous-périodique-20.png"></button>
            <button type="submit" id="submit">envoyer</button>
        </div>
        </form>
        <p v-if="msg" class="msgStyle">{{ msg }}</p>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const name = ref('')
    const fstName = ref('')
    const tel = ref('')
    const car = ref('peugot')
    const days = ref(1)
    const rate = ref(1)
    const msg = ref('')

    const submitInfo = async() => {
    try {
        const response = await fetch ('http://localhost:8000/add.php', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' // format variable a mettre en JSON
            },
            body: JSON.stringify({
                name : name.value,
                fstName : fstName.value,
                tel: tel.value,
                car: car.value,
                days: days.value,
                rate: rate.value
            })
        })

        const result = await response.json()
        msg.value = result.message

        setTimeout(() => {
            msg.value = ''
        }, 1500)

        if(result.status == 'success') {
            name.value = ''
            fstName.value = ''
            tel.value = ''
            days.value = ''
            rate.value = ''
        } 
    }catch(error){
        msg.value = 'Impossible de joindre le serveur API'
        
        setTimeout(() => {
            msg.value = ''
        }, 1500)
    }
    }
</script>
<style scoped>
    input{
        border: 0;
        border-bottom: 1px solid black ;
        background-color: #f7f7f700;
    }

    .icon{
        width: 300px;
        height: 300px;
        margin: 5rem;
    }

    .infoCli{
        height: 370px;
        padding: 2rem;
        border-radius: 10px;
    }
    
    input#name, input#fstName, input#num_loc {
        width: 21rem;
        padding: 10px;
    }

    #design_voiture{
        width: 15rem;
        align-items: center;
        font-size: 14px;
    }

    #taux_journalier, #nb_jrs {
        width: 8rem;
    }

    input#nb_jrs {
        margin-left: 2rem;
        border: 1px solid black;
    }

    input#taux_journalier {
        margin-left: 2.5rem;
        border: 1px solid black;
    }

    input, select{
        font-size: medium;
        margin-bottom :1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .btnPlace {
        display: flex;
        justify-content: center;
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

    .dashboard-grid {
        display: none;
    }

    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }

    .msgStyle {
        color: green;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: medium;
        align-items: flex-end;
        transition: 0.3s ease-in-out;
    }

</style>