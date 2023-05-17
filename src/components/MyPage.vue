<template>
    <div class="container">
      <h1>My Page</h1>
      <div class="container">
        <label>이름 </label>
        <input v-model="userInfo.name" :disabled="!editing">
      </div>
      <div class="container">
        <label>연락처 </label>
        <input v-model="userInfo.phone" :disabled="!editing">
      </div>
      <div class="container">
        <label>이메일 </label>
        <input v-model="userInfo.email" :disabled="!editing">
      </div>
      <div class="container">
        <label>비밀번호 </label>
        <input v-model="userInfo.password" :disabled="!editing" type="password">
      </div>
      <div class="container">
        <button v-if="!editing" @click="startEditing">수정 시작</button>
        <button v-else @click="finishEditing">수정 완료</button>
      </div>
      <div class="container">
        <button @click="logout">로그아웃</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInfo: {
          name: '사용자 이름',
          phone: '010-1234-5678',
          email: 'user@example.com',
          password: '********'
        },
        editing: false
      };
    },
    methods: {
      startEditing() {
        this.editing = true;
      },
      finishEditing() {
        this.editing = false;
      },
      
      logout() {
        /// 로그아웃 로직 구현
      }
    }
  };
  </script>

  <style>
  .container {
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  }

  </style>