<script setup lang ='ts'>
import TweetItem from './TweetItem.vue'
import TweetForm from './TweetForm.vue'
import { ref } from 'vue'
const tweets = ref([{ id: 0, description: 'This is the first tweet.' }])

const postTweet = (description: string) => {
  tweets.value.push({ id: Math.random(), description })
}

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(t => t.id !== id)
}

</script>

<template>
    <h1>Tweeter</h1>
    <div class="form">
        <TweetForm @post-tweets ="postTweet" />
    </div>
    <div class="tweet-container">
        <p v-if="tweets.length <= 0">
            No tweets have been added
        </p>
        <ul v-else>
            <TweetItem :tweets="tweets" @delete-tweet ="deleteTweet"/>
        </ul>
    </div>
</template>

<style>
</style>
