<template>
  <form v-on:submit="submitForm">
    <div>
      <!-- username 값이 변하면 v-model의 username값이 인식하고 
      v-model의 username이 변하면 username값이 인식  -->
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">   
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      //event.preventDefault();
      console.log(this.username, this.password);

      var url = 'https://jsonplaceholder.typicode.com/todos/1';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
}
</script>

<style>

</style>