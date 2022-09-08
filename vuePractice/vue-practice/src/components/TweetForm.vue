<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const tweet = ref<string>('')
const emit = defineEmits(['post-tweets'])
const postTweet = async () => {
  await emit('post-tweets', tweet.value)
  tweet.value = ''
}
</script>

<template>
    <div class="form">
        <div>
            <input class="input-form" v-model="tweet" />
        </div>
            <button class="post-button" @click="postTweet" >Post</button>
    </div>
</template>

<style scoped>
.form {
    background-color: rgba(224, 193, 163, 0.604);
    width:500px;
    height: 100%;
    margin: auto;
    padding: 30px;
}
.input-form {
    margin-bottom: 10px;
}
.post-button {
    background-color: rgb(210, 132, 30);
    padding: 5px 5px;
    margin: auto;
    border-radius: 4px;
}
.post-button:hover {
    background-color: rgb(234, 172, 90);
}
</style>
