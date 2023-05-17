<template id="app">
  <div class="container">
    <HeaderPage></HeaderPage>
    <hr>
    <MyPage></MyPage>
    <CollectionPage></CollectionPage>
    <hr>
    <NewsList></NewsList>
  </div>
</template>
 
<script>
import HeaderPage from './components/HeaderPage.vue';
import CollectionPage from './components/CollectionPage.vue';
import NewsList from './components/NewsList.vue';
import MyPage from './components/MyPage.vue';


export default {
  name: 'App',
  components: {
    HeaderPage,
    CollectionPage,
    NewsList,
    MyPage
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