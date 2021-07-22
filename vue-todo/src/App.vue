<template>
 <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>

 </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import TodoList from './components/TodoFooter.vue'
  import TodoInput from './components/TodoInput.vue'


export default {
  
  components: {
    //ctrl + d -> 같은 이름으로 이동 
    //컴포넌트 태그명 : 컴포넌트 내용 
    'TodoHeader': TodoHeader,
    'TodoFooter': TodoFooter,
    'TodoInput': TodoInput,
    'TodoList': TodoList,

  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
