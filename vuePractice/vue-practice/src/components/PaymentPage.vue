<script setup lang ="ts">
import { ref } from 'vue'

const buyLists = ref([{
  id: 0,
  goods: 'Desk',
  prices: 5000
}])

const good = ref('')
const price = ref(0)
const add = () => {
  buyLists.value.push({ id: Math.random(), goods: good.value, prices: price.value })
  console.log(buyLists)
  good.value = ''
  price.value = 0
}

const deleteList = (id: number) => {
  console.log('deleted', id)
  buyLists.value = buyLists.value.filter(buyList => buyList.id !== id)
}
</script>

<template>
    <h1>Payment</h1>
    <div class="containers">
        <div class = "goods">
        <input v-model="good" />
        </div>
    <div class="price">
        <input v-model="price"/>
    </div>
    <div>
        <button @click="add" class="save-button">Clear</button>
    </div>
    <li v-for= "buyList in buyLists" :key="buyList" class="wishList">
        {{buyList.goods}} {{buyList.prices}} yen <button @click="deleteList(buyList.id)" class="delete-button">Delete</button> Link for...
    </li>
    </div>
</template>

<style scoped>
.goods {
    margin-bottom: 10px;
}
.price {
    margin-bottom: 10px;
}

li {
    list-style: none;
}

.wishList {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    padding:20px;
    background-color: #e9ce7e;
    width: 50%;
    margin: 10px 0% 10px 25%;
}

.save-button {
    background-color: rgb(223, 255, 127);
}
.save-button:hover {
    background-color:rgb(140, 171, 48);
}

.delete-button {
    background-color:darkorange;
}

.delete-button:hover {
    background-color:rgb(125, 80, 24);
}
</style>
