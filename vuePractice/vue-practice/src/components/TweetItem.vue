<script setup lang ='ts'>
import { defineProps, defineEmits } from 'vue'

type Tweet = {
    id: number,
    description: string,
}

type Props = {
    tweets: Tweet[]
}

defineProps<Props>()
const emit = defineEmits(['delete-tweet'])
const deleteTweet = (id: number) => {
  alert('Are you sure that you will delete your tweet?')
  emit('delete-tweet', id)
}
</script>

<template>
    <li class="tweets" v-for="tweet in tweets" :key="tweet.id">
        <span>{{tweet.description}}
            <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
        </span>
    </li>
</template>

<style scoped>
.tweets {
    display: flex;
    flex-direction: column;
    background-color: rgba(224, 193, 163, 0.604);
    width: 60%;
    padding: 24px 0;
    margin: 10px 25% 10px 20%;
    border-radius: 4px;
}

li {
    list-style: none;
}
.delete-button {
    background-color:rgb(210, 132, 30);
    padding: 5px 5px;
    margin: auto;
    border-radius: 4px;
}
.delete-button:hover {
    background-color:rgb(234, 172, 90);
}
</style>
