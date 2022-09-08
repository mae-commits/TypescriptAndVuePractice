<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const name = ref<string>('')
const age = ref<number>(0)

const emit = defineEmits(['register-personinfo'])
const register = async () => {
  await emit('register-personinfo', { id: Math.random(), name: name.value, age: age.value })
  name.value = ''
  age.value = 0
}
</script>

<template>
    <div class="form-container">
        <div class="form-name">
            <span>name: <input v-model="name" /> </span>
        </div>
        <div class="form-age">
            <span>age: <input v-model="age" type="number"/> </span>
        </div>
    </div>
    <button @click="register" class="register-button"> register</button>
</template>

<style scoped>
.form-container {
    display: center;
    flex-direction: column;
    background-color: rgba(228, 161, 18, 0.315);
    padding: 24px 0;
    width: 60%;
    margin: auto;
}
.form-name {
    margin-bottom: 10px;
    justify-content: space-between;
}
.form-age {
    margin: auto;
}
.register-button {
    border-radius: 4px;
    padding: 5px 5px;
    margin-top: 10px;
}
</style>
