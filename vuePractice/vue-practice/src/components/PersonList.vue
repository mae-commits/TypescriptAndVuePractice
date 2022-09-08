<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
type person = {
    id: number,
    name: string,
    age: number,
}

type Props = {
    persons: person[],
}

const emit = defineEmits(['delete-info'])

defineProps<Props>()

// Pass id into 'PersonalPage.vue'
const deleteInfo = (id: number, name: string) => {
  if (confirm('Delete' + name + '?')) {
    emit('delete-info', id)
  }
}
</script>

<template>
    <li v-for="info in persons" :key = "info.id" class="info">
        <span>
            {{info.name}}
        </span>
        <span>
            age:{{info.age}}
        </span>
        <button @click="deleteInfo(info.id, info.name)" class="delete-button">
            <span>delete</span>
        </button>
    </li>
</template>

<style scoped>
li {
    list-style: none;
}
.info {
    list-style: none;
    margin-top: 12px;
    border-radius: 4px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(228,201,133);
    padding: 8px 20px;
    width: 300px;
}
.delete-button {
    padding: 5px 5px;
}
</style>
