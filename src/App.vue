<template id="app">

  <div class="container">
    <hr>
    <HeaderPage></HeaderPage>
    <hr>
    <login-page></login-page>
    <hr>
    <JoinPage></JoinPage>
    <hr>
    <BAF></BAF>
    <hr>
    <router-view></router-view>
  </div>

  <div>
  

  </div>
</template>
 
<script>
import HeaderPage from './components/HeaderPage.vue'
import BAF from './components/BAF.vue'
import LoginPage from './components/LoginPage.vue'
import JoinPage from './components/JoinPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    BAF,
    LoginPage,
    JoinPage
  }
}
</script>
 
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 100px;
  }
  #container {
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  margin: 20px 0; 
}


</style>