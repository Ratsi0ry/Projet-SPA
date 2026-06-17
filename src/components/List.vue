<template>
    <table>
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Numero</th>
            <th>Voiture loyée</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th>Nombre de jours</th>
            <th>Taux journalier</th>
            <th>Loyer total</th>
        </tr>    

        <tr v-for="client in clients" :key="client.id">
            <td>
                <span v-if="!editingStates[client.id]">{{ client.name }}</span>
                <input v-else v-model="client.name" type="text"/>
            </td>
            <td>
                <span v-if="!editingStates[client.id]">{{ client.fstName }}</span>
                <input v-else v-model="client.fstName" type="text"/>
            </td>
            <td>
                <span v-if="!editingStates[client.id]">{{ client.tel }}</span>
                <input v-else v-model="client.tel" type="text"/>
            </td>
            <td>
                <span v-if="!editingStates[client.id]">{{ client.car }}</span>
                <input v-else v-model="client.car" type="text"/>
            </td>
            <td>{{ client.dayBegin }}</td>
            <td>{{ client.dayEnd }}</td>
            <td>{{ client.nbJours }}</td>
            <td>{{ client.tauxJournalier }} Ar</td>
            <td>{{ client.nbJours * client.tauxJournalier }} Ar</td>

            <td class="actions">
                <button @click="modifier(client)" class="btnModifier"><img src="@/assets/image/icons8-modifier-20.png">
                    {{ editingStates[client.id] ? 'sauvegarder' : '' }}
                </button>
                <button @click="supprimer(client.id)" class="btnDelete"><img src="@/assets/image/icons8-supprimer-pour-toujours-20.png" alt=""></button>
            </td>
        </tr>
    </table>
    
</template>
<script setup>
  import { ref, onMounted } from 'vue';

  const clients = ref([])
  const editingStates = ref({})

  // Récupérer les données de la base de données
  const fetchClients = async() => {
    try {
      const response = await fetch('http://localhost:8000/list.php')
      const result = await response.json()
      
      if(result.status === 'success') {
        clients.value = result.data
      } else {
        console.error('Erreur:', result.message)
      }
    } catch(error) {
      console.error('Impossible de récupérer les données:', error)
    }
  }

  // Au chargement du composant
  onMounted(() => {
    fetchClients()
  })

  const modifier = async(client) => {
    if(!editingStates.value[client.id]) {
      editingStates.value[client.id] = true
    } else {
      // Sauvegarder les modifications en base de données
      try {
        const response = await fetch('http://localhost:8000/list.php?action=update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: client.id,
            name: client.name,
            fstName: client.fstName,
            tel: client.tel,
            car: client.car
          })
        })

        const result = await response.json()
        if(result.status === 'success') {
          editingStates.value[client.id] = false
          alert('Client modifié!')
        } else {
          alert('Erreur: ' + result.message)
        }
      } catch(error) {
        console.error('Erreur:', error)
        alert('Impossible de modifier le client')
      }
    }
  };

  const supprimer = async(id) => {
    if (confirm("Voulez-vous vraiment supprimer cette ligne ?")) {
      try {
        const response = await fetch('http://localhost:8000/list.php?action=delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id })
        })

        const result = await response.json()
        if(result.status === 'success') {
          const index = clients.value.findIndex(c => c.id === id)
          if(index > -1) {
            clients.value.splice(index, 1)
          }
          alert('Client supprimé!')
        } else {
          alert('Erreur: ' + result.message)
        }
      } catch(error) {
        console.error('Erreur:', error)
        alert('Impossible de supprimer le client')
      }
    }
  };
</script>
<style scoped>
    table{
        border-collapse: collapse;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        margin-left: 3rem;
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