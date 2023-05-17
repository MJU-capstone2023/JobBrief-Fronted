// import HeaderPage from './components/HeaderPage.vue';
// import CollectionPage from './components/CollectionPage.vue';
import NewsList from './components/NewsList.vue';
import LoginPageVue from './components/LoginPage.vue';
import JoinPage from './components/JoinPage.vue'
import NewsPage from  './components/NewsPage.vue'

import { createRouter, createWebHistory } from 'vue-router'
// import LoginPageVue from './components/LoginPage.vue'
// import JoinPage from './components/JoinPage.vue'

const routes = [
  {
    path: '/',
    component: NewsList
  },
  {
    path: '/news/:id',
    component: NewsPage
  },
  {
    path: '/login',
    component: LoginPageVue
  },
  {
    path: '/join',
    component: JoinPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
