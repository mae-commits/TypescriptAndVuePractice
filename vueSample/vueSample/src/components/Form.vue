<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import axios from 'axios';

  const vFocus = {
    mounted: (el: HTMLElement) => {
      el.focus()
    }
  }
  
  const userName = ref<string>('')
  const interest = ref([])
  const data = ref()
  const isLoading = ref<boolean>(false) 
  const err = ref()

  onMounted(async () => {
    isLoading.value = true
    try {
    const response = await axios.get('https://vue-example-323ba-default-rtdb.firebaseio.com/surveys.json')
    if (response.status !== 200){
      throw new Error('server side error')
    }
    data.value = response
    } catch (e) {
      err.value = e
    }
    isLoading.value = false
    console.log('data is ', data.value)
  })
  
  const onSubmit = (e: Event) => {
    // fetch('https://vue-example-323ba-default-rtdb.firebaseio.com/surveys.json', {   
    // method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    //   },
    // body: JSON.stringify({name: userName.value, interest: interest.value})
    // }
    // )
    // userName.value = ''
    axios.post('https://vue-example-323ba-default-rtdb.firebaseio.com/surveys.json', {
      name: userName.value,
      interest: interest.value,
    })
    interest.value = []
  }
  
  
  </script>
  
  <template>
    <form>
      <div class="form-control">
        <label for="user-name">Your Name</label>
        <input id="user-name" name="user-name" type="text" v-model.trim="userName" v-focus />
      </div>
      <div class="form-control">
        <h2>What are you interested in?</h2>
        <div>
          <input id="interest-react" name="interest" type="checkbox" value="react" v-model="interest" />
          <label for="interest-react">React.js</label>
        </div>
        <div>
          <input id="interest-vue" name="interest" type="checkbox" value="vue" v-model="interest" />
          <label for="interest-vue">Vue.js</label>
        </div>
        <div>
          <input
            id="interest-angular"
            name="interest"
            type="checkbox"
            value="angular"
            v-model="interest"
          />
          <label for="interest-angular">Angular.js</label>
        </div>
      </div>
      <div v-if="isLoading">Loading ...</div>
      <div v-else>{{ data }}</div>
      <div v-if= "err">{{err}}</div>
      <div>
        <button @click.prevent="onSubmit">Save Data</button>
      </div>
    </form>
  </template>
  
  <style scoped>
  form {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem;
    background-color: #ffffff;
  }
  
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
  }
  
  h2 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  
  input,
  select {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.5rem;
  }
  
  select {
    width: auto;
  }
  
  input[type="checkbox"],
  input[type="radio"] {
    display: inline-block;
    width: auto;
    margin-right: 1rem;
  }
  
  input[type="checkbox"] + label,
  input[type="radio"] + label {
    font-weight: normal;
  }
  
  button {
    font: inherit;
    border: 1px solid #0076bb;
    background-color: #0076bb;
    color: white;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 30px;
  }
  
  button:hover,
  button:active {
    border-color: #002350;
    background-color: #002350;
  }
  </style>

<!-- <script setup lang="ts">
import {DirectiveBinding, ref, watch} from 'vue';
import Rating from './Rating.vue';
const userName = ref<string>('')

v-focus
const vFocus = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.focus()

    if (binding.modifiers.alert) {
      el.style.backgroundColor = 'pink'
    }
  }
}

const from = ref<string>('japan')
const interest = ref([])
const radios = ref([])
const ratings = ref<string>('')

const onSubmit = () => {
  console.log('userName ', userName.value)
  console.log('from is', from.value)
  console.log(radios.value)
  console.log('Rating ... ', ratings.value)
  interest.value = []
}

watch(interest, () => {console.log('interest', interest.value)})
</script>

<template>
  <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input v-model="userName" id="user-name" name="user-name" type="text" v-focus.alert />
    </div>
    <div class="form-control">
      <label for="age">Your Age</label>
      <input id="age" name="age" type="number"/>
    </div>
    <div class="form-control">
      <label for="from">Where Are you from?</label>
      <select id="from" name="from" v-model="from">
        <option value="japan">Japan</option>
        <option value="china">China</option>
        <option value="others">Others</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-react" name="interest" type="checkbox" value="react" v-model="interest"/>
        <label for="interest-react">React.js</label>
      </div>
      <div>
        <input id="interest-vue" name="interest" type="checkbox" value="vue" v-model="interest"/>
        <label for="interest-vue">Vue.js</label>
      </div>
      <div>
        <input id="interest-angular" name="interest" type="checkbox" value="angular" v-model="interest"/>
        <label for="interest-angular">Angular.js</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="radios" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-books" name="how" type="radio" value="books" v-model="radios"/>
        <label for="how-books">Books</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="others" v-model="radios"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <rating v-model="ratings"/>
    </div>
    <div>
      <button @click.prevent="onSubmit">Save Data</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style> -->