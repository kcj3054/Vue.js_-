<template>
  <div class="inputBox shadow">
      <!-- v-model input에 입력된것을 vue 데이터에 맵핑한다  -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function() {
            var obj = {completed: false, item: this.newTodoItem};
            //저장 하는 로직 localStorage.setItem();
            // json.stringfy(ojb) -> obj 객체가 스트링으로 들어간다 
            localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
            this.clearInput();
        },
        clearInput: function() {
            this.newTodoItem= '';
        }
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>