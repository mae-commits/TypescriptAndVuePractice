<script setup lang ="ts">
import { ref, reactive } from 'vue'

type defaultList = {
    id: number,
    goods: string,
    prices: number,
}

let buyLists = reactive([{
  id: 0,
  goods: 'Desk',
  prices: 5000
}])

const good = ref('')
const price = ref(0)
const count = ref(1)
const add = () => {
  buyLists.push({ id: count.value, goods: good.value, prices: price.value })
  console.log(buyLists)
  good.value = ''
  price.value = 0
  count.value += 1
}

const deleteList = (id: number) => {
  console.log('deleted', id)
  buyLists = buyLists.filter(buyList => buyList.id !== id)
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
        <button @click="add">Clear</button>
    </div>
    <li v-for= "buyList in buyLists" :key="buyList" class="wishList">
        {{buyList.goods}} {{buyList.prices}} yen <button @click="deleteList(buyList.id)" >Delete</button> Link for...
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
    background-color: aliceblue;
    width: 50%;
    margin: auto;
}
</style>
