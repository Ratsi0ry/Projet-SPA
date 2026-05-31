<template>
    <table>
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Numero</th>
            <th>Voiture</th>
            <th>Nb Jrs</th>
            <th>Taux Jrs</th>
            <th>Loyer</th>
        </tr>    

        <tr v-for="(clientInfo, index) in clients" :key="clientInfo.id">

            <td>
                <span v-if="!clientInfo.modif">{{ clientInfo.nom }}</span>
                <input v-else v-model="clientInfo.nom" type="text"/>
            </td>
            <td>
                <span v-if="!clientInfo.modif">{{ clientInfo.prenom }}</span>
                <input v-else v-model="clientInfo.prenom" type="text"/>
            </td>
            <td>
                <span v-if="!clientInfo.modif">{{ clientInfo.numero }}</span>
                <input v-else v-model="clientInfo.numero" type="text"/>
            </td>
            <td>
                <span v-if="!clientInfo.modif">{{ clientInfo.voiture }}</span>
                <input v-else v-model="clientInfo.voiture" type="text"/>
            </td>
            <td>
                <span v-if="!clientInfo.modif">{{ clientInfo.nbJrs }}</span>
                <input v-else v-model="clientInfo.nbJrs" type="text"/>
            </td>
            <td>
                <span v-if="!clientInfo.modif">{{ clientInfo.taux }}</span>
                <input v-else v-model="clientInfo.taux" type="text"/>
            </td>
            <td>{{ clientInfo.nbJrs * clientInfo.taux }} Ar</td>

            <td class="actions">
                <button @click="modifier(clientInfo)" class="btnModifier"><img src="/src/assets/image/icons8-modifier-20.png">
                    {{ clientInfo.modif ?'sauvegarder' : '' }}
                </button>
                <button @click="supprimer(index)" class="btnDelete"><img src="/src/assets/image/icons8-supprimer-pour-toujours-20.png" alt=""></button>
            </td>
        </tr>
    </table>    
</template>
<script setup>
  import { ref } from 'vue';

  const clients = ref([
    {id:1, nom:'koto', prenom:'alexis', numero:'034 74 891 14', voiture:'toyota', nbJrs:7, taux:50000}
  ])

    const modifier = (client) => {
    client.modif = !client.modif;
  };

  const supprimer = (index) => {
    if (confirm("Voulez-vous vraiment supprimer cette ligne ?")) {
        clients.value.splice(index, 1);
    }
  };
</script>
<style scoped>
    table{
        border-collapse: collapse;
    }
     table td.actions{
        border: 0;
    }

    td,th{
    text-align: center;
    border: 1px solid black;
    }

    button.btnModifier, td.actions {
        display: flex;
        align-items: center;
    }

    button.btnDelete{
        border: 0;
        background-color: #f7f7f700;
    }

    input{
        width: 7rem;
        background-color: #f7f7f700;
        border: 0;
        padding: 0.5rem;
    }
    input:hover{
        background-color: rgb(188, 200, 253);
        transition: 0.3s ease-out;
    }
</style>