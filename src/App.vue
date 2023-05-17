<template id="app">
  <div class="container">
    <HeaderPage></HeaderPage>
    <router-view/>
  </div>
</template>

 
<script>
import HeaderPage from './components/HeaderPage.vue';
// import CollectionPage from './components/CollectionPage.vue';
// import NewsList from './components/NewsList.vue';
// import LoginPageVue from './components/LoginPage.vue';
// import JoinPage from './components/JoinPage.vue'
// import NewsPage from  './components/NewsPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage
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