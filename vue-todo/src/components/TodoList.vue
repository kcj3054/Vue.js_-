<template>
  <div>
    <ul>
        <li v-for="todoItem in todoItems" v-bind:key="todoItem" class="shadow">1</li>
            <i class="fas fa-check" v-on:click="toggleComplete"></i>
            {{todoItem}}
            <span class="removeBtn" v-on:click="removeTodo">
            <i class="fas fa-trash"></i>
            </span>
    </ul>
    
  </div>
</template>

<script>
export default {
    data : function(){
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function() {

        }
    },
    created: function() {
        if(localStorage.length > 0) {
            for(var i = 0 ; i < localStorage.length; ++i) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
                this.todoItems.push(localStorage.key(i))
            }
        }
    }
}
</script>

<style>

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>