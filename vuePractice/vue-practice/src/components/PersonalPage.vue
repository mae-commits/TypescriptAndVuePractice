<script setup lang="ts">
import PersonList from './PersonList.vue'
import PersonForm from './PersonForm.vue'
import { ref } from 'vue'

type personalInfo = {
  id: number,
  name: string,
  age: number,
}

const persons = ref([{ id: 0, name: 'John', age: 24 }])

const register = (person :personalInfo) => {
  persons.value.push(person)
}

const deleteInfo = (id: number) => {
  persons.value = persons.value.filter(person => person.id !== id)
}
</script>

<template>
  <div class="container">
  <!-- Input the clients' information  -->
    <PersonForm @register-personinfo = 'register'/>
  <!-- Show all the information now -->
    <ul>
      <PersonList :persons="persons" @delete-info ="deleteInfo" />
    </ul>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
