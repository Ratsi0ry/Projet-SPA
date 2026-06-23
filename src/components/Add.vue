<template>

    <img src="@/assets/image/location-de-voitures.png" class="icon">

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
            <option value="peugot 206">Peugot 206 - 80 000 Ar</option>
            <option value="dacia duster">Dacia Duster - 95 000 Ar</option>
            <option value="suzuki grand vitara">Suzuki Grand Vitara - 120 000 Ar</option>
            <option value="toyota prado">Toyota Prado - 140 000 Ar</option>
            <option value="hyundai starex">Hyundai starex - 150 000 ar</option>
        </select><br><br>

        <!--nb jours-->
        <label for="dateDebut">Date de debut:</label>
        <input type="date" id="dateDebut" v-model="dayBegin"><br><br>

        <label for="dateFin">Date de fin:</label>
        <input type="date" id="dateFin" v-model="dayEnd"><br>

        <!--nombre de jours et taux journalier-->
        <p class="active">Nombre de jours:<span id="nb_jrs">{{ nbJours }}</span></p>
        <p class="active">Taux journalier:<span id="taux_journalier">{{ tauxJournalier }} Ar</span></p><br><br>

        <p v-if="msg" class="msgStyle">{{ msg }}</p>
        
        <div class="btnPlace">
            <button type="reset" id="reset"><img src="@/assets/image/icons8-rendez-vous-périodique-20.png"></button>
            <button type="submit" id="submit">envoyer</button>
        </div>
        </form>
        
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue';

    const name = ref('')
    const fstName = ref('')
    const tel = ref('')
    const car = ref('peugot 206')
    const dayBegin = ref('')
    const dayEnd = ref('') 
    const msg = ref('')

    // Prix des voitures
    const carPrices = {
        'peugot 206': 80000,
        'dacia duster': 95000,
        'suzuki grand vitara': 120000,
        'toyota prado': 140000,
        'hyundai starex': 150000
    }

    // Calcul du nombre de jours
    const nbJours = computed(() => {
        if (dayBegin.value && dayEnd.value && (dayEnd.value >= dayBegin.value)) {
            const start = new Date(dayBegin.value)
            const end = new Date(dayEnd.value)
            const diffTime = Math.abs(end - start)// resultat en milliseconde
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))// conversion milliseconde en jours
            return diffDays || 1
        }
        return 0
    })

    // Calcul du taux journalier :prix voiture * nombre de jours
    const tauxJournalier = computed(() => {
        const price = carPrices[car.value] || 0
        return price * nbJours.value
    })

    const submitInfo = async() => {
    try {
        const response = await fetch ('http://localhost:8000/add.php', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json' 
            },
            body: JSON.stringify({
                name : name.value,
                fstName : fstName.value,
                tel: tel.value,
                car: car.value,
                dayBegin: dayBegin.value,
                dayEnd: dayEnd.value,
                tauxJournalier: tauxJournalier.value
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
            dayBegin.value = ''
            dayEnd.value = ''
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
        font-size: 18px;
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
        margin-bottom :0.5rem;
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
    
    #dateDebut{
        margin-left: 2rem;
    }

    #dateFin{
        margin-left: 3rem;
    }

    .active {
        margin-bottom: 1.2rem;
        font-size:15px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

</style>