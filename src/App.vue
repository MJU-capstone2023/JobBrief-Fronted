<template id="app">
  <div class="container">
    <HeaderPage></HeaderPage>
<<<<<<< HEAD
    <hr>
    <MyPage></MyPage>
    <CollectionPage></CollectionPage>
    <hr>
    <NewsList></NewsList>
=======
    <router-view/>
>>>>>>> 51a8b6a995c8c3d3aaf0f2a4ce6af89a15a76d29
  </div>
</template>

 
<script>
import HeaderPage from './components/HeaderPage.vue';
<<<<<<< HEAD
import CollectionPage from './components/CollectionPage.vue';
import NewsList from './components/NewsList.vue';
import MyPage from './components/MyPage.vue';

=======
// import CollectionPage from './components/CollectionPage.vue';
// import NewsList from './components/NewsList.vue';
// import LoginPageVue from './components/LoginPage.vue';
// import JoinPage from './components/JoinPage.vue'
// import NewsPage from  './components/NewsPage.vue'
>>>>>>> 51a8b6a995c8c3d3aaf0f2a4ce6af89a15a76d29

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    HeaderPage,
    CollectionPage,
    NewsList,
    MyPage
=======
    HeaderPage
>>>>>>> 51a8b6a995c8c3d3aaf0f2a4ce6af89a15a76d29
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