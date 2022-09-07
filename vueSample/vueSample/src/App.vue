<template>
  <div class="container">
    <user-list></user-list>
  </div>
  <div class="container">
    <div class="circle" :class="{animate : animatingCircle}"></div>
    <button @click="animateCircle">Animate</button>
  </div>

  <div class="container">
    <transition name="paragraph">
      <p v-if="paragraphVisible">Paragraph</p>
    </transition>
    <button @click="toggleParagraph">Switch</button>
  </div>
  <!-- <transition name="modal"> -->
    <modal :open="dialogIsVisible">
    <p>This is a test modal!</p>
    <button @click="toggleModal">Close</button>
  </modal>
  <!-- </transition> -->
  <div class="container">
    <button @click="toggleModal" >Modal</button>
  </div>
</template>  

<script setup lang="ts">
import { ref } from 'vue';
import Modal from './components/Modal.vue'
import userList from './components/UserList.vue'
const animatingCircle = ref(false)
const paragraphVisible = ref(false)
const dialogIsVisible = ref(false)

const animateCircle = () => {
  animatingCircle.value = true
}

const toggleParagraph = () => {
  paragraphVisible.value = !paragraphVisible.value
}

const toggleModal = () => {
  dialogIsVisible.value = !dialogIsVisible.value
}
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
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #180081;
  border-radius: 30px;
  background-color: #000981;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #0b64a8;
  border-color: #0b64a8;
}
.circle {
  width: 8rem;
  height: 8rem;
  background-color: #2c5b8e;
  margin-bottom: 2rem;
  border-radius: 4rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.paragraph-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.paragraph-enter-to {
  opacity: 1;
  transition: translateY(0);
}

.paragraph-enter-active {
  transition: all 1s ease-out;
}

.animate {
  /* transform: translateX(-100px); */
  animation: fade 0.3s ease-out forwards;
}

@keyframes fade {
  0% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-90px);
  }

  100% {
    transform: translateX(-100px);
  }
}
</style>

<!-- <template>
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
</style> -->

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