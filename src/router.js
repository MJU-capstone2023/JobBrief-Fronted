import MyPage from './components/MyPage.vue'
import NewsList from './components/NewsList.vue'
import LoginPageVue from './components/LoginPage.vue'
import JoinPage from './components/JoinPage.vue'
import NewsPage from  './components/NewsPage.vue'
import CollectionPage from  './components/CollectionPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/mypage',
    component: MyPage
  },
  {
    path: '/newsList',
    component: NewsList
  },
  {
    path: '/newsPage',
    component: NewsPage
  },
  {
    path: '/login',
    component: LoginPageVue
  },
  {
    path: '/join',
    component: JoinPage
  },  
  {
    path: '/collection',
    component: CollectionPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
