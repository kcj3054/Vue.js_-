<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포넌트의 메소드 명" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- todolist v-bind:내려보낼 프롭스 속성 이름 ="현재 위치의 컴포넌트 데이터 속성" -->
    <!-- propsdata에 내려보낼때 todoItems를 propsdata에 내려보낸다  -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"  v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {

data : function() {
  return {
    todoItems: []
  }
},
methods: {
  addOneItem : function(todoItem) {
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
  },
  removeOneItem: function(todoItem, index) {

    localStorage.removeItem(todoItem.item);
    this.todoItems.splice(index, 1);
    
  },
  toggleOneItem: function(todoItem) {
      todoItem.completed = !todoItem.completed;
    //   업데이트하니 지웠다가 다시 세팅할때 stringify하면서 저장한다 
    //로컬 스토리지에 데이터를 갱신하는 부분 
      localStorage.removeItem(todoItem.item); 
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  }
},
    created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }  
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>