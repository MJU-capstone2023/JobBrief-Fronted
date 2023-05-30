<template>
    <div>
        <img src = "@/assets/배너.png" />
    </div>
    <div class="nav-bar">
      <router-link class="button" to="/newslist">전체</router-link>
      <router-link class="button" to="/newslist">생산/품질</router-link>
      <router-link class="button" to="/newslist">IT개발</router-link>
      <router-link class="button" to="/newslist">인사/총무</router-link>
      <router-link class="button" to="/newslist">재무/회계/금융</router-link>
      <router-link class="button" to="/newslist">전략/기획</router-link>
      <router-link class="button" to="/newslist">영업/영업관리</router-link>
      <router-link class="button" to="/newslist">마케팅/MD</router-link>
      <router-link class="button" to="/newslist">컬렉션</router-link>
      <router-link class="button" to="/newslist">마이페이지</router-link>
      <router-link class="button" to="/newslist">로그인</router-link>
      <router-link class="button" to="/newslist">회원가입</router-link>    
    </div>
    <router-view/>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style>
  .nav-bar {
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    margin: 0 10px;
    padding: px 10px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #333;
    color: #fff;
  }
</style>




