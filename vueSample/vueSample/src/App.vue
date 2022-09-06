<template>
  <Form />
</template>

<script setup lang="ts">
import Form from './components/Form.vue';
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>

<!-- <script setup lang="ts">
import {provide} from 'vue'
import {todos, todoKey} from  './useTodo'
import TodoList from './components/TodoList.vue';

provide(todoKey, todos)
</script>

<template>
  <TodoList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style> -->

<!-- <script setup lang="ts">
import { ref, computed} from 'vue'
import CardList from './components/CardList.vue';
import SecondCardList from './components/SecondCardList.vue';

const isFirstTab = ref(true)
const updateTab = (isFirst: boolean) => {
  isFirstTab.value = isFirst
}

const isActiveTabName = ref('1')

const updateTab = (activeName: string) => {
  isActiveTabName.value = activeName
}
const currentComponent = computed(() => {
  switch(isActiveTabName.value) {
    case '1':
      return CardList
    case '2':
      return SecondCardList
    case '3':
      return CardList
    default:
      return CardList
  }
})
</script> -->
  
  <!-- <template>
    <div class="tab-changer">
      <button @click="updateTab('1')">Tab 1</button>
      <button @click="updateTab('2')">Tab 2</button>
      <button @click="updateTab('3')">Tab 3</button>
    </div>
    <div class="tab-contents">
      <CardList></CardList>
      <component :is="currentComponent"></component>
    </div>
  </template> -->
  
  <!-- <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .tab-contents {
    margin-top: 20px;
  
  }
  </style> -->
  
<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import payment from './components/payment.vue';
import Tweet from './components/Tweet.vue';
import Person from './components/Person.vue'
</script>

<template>
  <Person />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<!-- // This starter template is using Vue 3 <script setup> SFCs -->
<!-- // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup -->