<template>
  <div>
    <!-- template에 html root는 하나만 있어야한다  -->
    <!-- <app-header v-bind:프롭스 속성 이름(하위 컴포넌트의 프롭스)="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>   
    <!-- 하위 컴포넌트에서 renew 이벤트가 전달도미ㅕㄴ서 renewStr 메소드가 실행된다 -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'


export default {
  data: function(){
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  }, 
  methods: {
    renewStr: function() {
      this.str = 'hi'
    }
  }
}
</script>

<style>

</style>