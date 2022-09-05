<script setup lang ='ts'>
import { ref, defineEmits,computed } from 'vue'
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)
const emit = defineEmits(['register'])
const register = () => {
    const person = {id: Math.random(), name: inputtingName.value, age: inputtingAge.value}
    emit('register', person)
    inputtingName.value = ''
    inputtingAge.value = 0
}

const nameLengthLimit =15

const isValidName = computed(() => {
    if (inputtingName.value.length >+ nameLengthLimit) {
        return false
    }else{
        return true
    }
})
const color = computed(() => {
    return isValidName.value ? 'white' : 'rgb(244,194,190)'
})
</script>

<template>
    <div class="form-container">
        <div class="input-container">
            <div class="input-column">
                <span>name:</span>
                <input class="input-name" v-model="inputtingName" />
            </div>
            <span v-if="!isValidName" class='error-message'>{{nameLengthLimit}}character or less, please</span>
            <div class="input-column">
                <span>age:</span>
                <input class="input" v-model="inputtingAge" type="number"/>
            </div>
        </div>
        <button :disabled="!isValidName" @click="register" class="register-button">resister</button>
    </div>
</template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255,241,226);
    padding: 24px 0;
    width: 150%;
    margin-bottom: 12px;
    border-radius: 4px;
}

.input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
}

.input-column {
    width: 200px;
    display: flex;
    justify-content: space-between;
}

.input-name {
    background-color: v-bind(color);
}
input {
    width: 120px;
    margin-bottom: 10px;
}
span {
    font-size: 20px;
    font-weight: bold;
}
.register-button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    background-color: #68c9c9;
    border-radius: 2px;
    border: none;
    width: 60px;
    height: 22px;
    margin-top: 12px;
}
.save-button:hover{
    background-color: #37bdbd;
}
.error-message {
    font-size: 12px;
    font-weight: rgb(244, 194, 190);
}
</style>