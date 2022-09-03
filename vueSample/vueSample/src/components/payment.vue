<script setup lang="ts">
import { ref, reactive } from 'vue';
// Refer the value of itemName1 in script
const itemName1 = ref<string>('Desk')
const itemName2 = 'Bike'
// reactive is valid for objects
const item1 = reactive({
    name: 'Desk',
    price: 40000,
})
const price1 = 40000
const price2 = 20000
const url1 = 'https://www.amazon.co.jp/-/en/%E8%8D%92%E6%9C%A8%E9%A3%9B%E5%91%82%E5%BD%A6-ebook/dp/B009PL86BU/?_encoding=UTF8&pd_rd_w=BLySA&content-id=amzn1.sym.f44247ac-b9eb-44a8-bc22-22bce16483de&pf_rd_p=f44247ac-b9eb-44a8-bc22-22bce16483de&pf_rd_r=NBWXDN0KE35HPJ8W7SWY&pd_rd_wg=mb1pJ&pd_rd_r=278535fe-9430-4297-af16-09b3dad8f53b&ref_=pd_gw_bmx27b'

const buy = (itemName: string) => {
    alert('Are you sure to buy ' + itemName + '?')
}
const input = (event: any) => {
    // console.log('event:',event.target.value)
    // Input the value into itemName1
    // If you would like to access the value with ref(),
    // .value is necessary
    item1.name = event.target.value
}

const inputPrice = (event: any) => {
    // console.log('event:',event.target.value)
    // Input the value into itemName1
    // If you woudl like to access the value with ref(),
    // .value is necessary
    item1.price = event.target.value
}
const clear = () => {
    item1.name = ''
    item1.price = 0
}
</script>

<template>
    <div class = "container">
        <h1>Payment</h1>
        <!-- Input item names -->
        <input @input="input" v-model="item1.name"/>
        <input @input="inputPrice" v-model="item1.price"/>
        <button @click="clear">Clear</button>
        <div class = "payment">
            <label>{{item1.name}}</label>
            <label>{{item1.price}} yen</label>
            <a v-bind:href="url1">bought at...</a>
            <!-- Make a button -->
            <button @click="buy(item1.name)">BUY</button>
        </div>
        <div class = "payment">
            <label>{{itemName2}}</label>
            <label>{{price2}} yen</label>
            <button @click="buy(itemName2)">BUY</button>
        </div>
    </div>
    
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

input{
    margin-bottom: 8px;
}
.payment {
    display: flex;
    /* 端に寄せる */
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 400px;
    background-color: aliceblue;
    margin-bottom: 8px;
}
label {
    font-size: 20px;
    font-weight: bold;
}
</style>