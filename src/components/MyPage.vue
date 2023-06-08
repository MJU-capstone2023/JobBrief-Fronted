<template>
  <div class="container">
    <h1>My Page</h1>
    <div class="form-group">
      <label>이름</label>
      <input v-model="userInfo.name" :disabled="!editing" class="form-control">
    </div>
    <div class="form-group">
      <label>연락처</label>
      <input v-model="userInfo.phoneNumber" :disabled="!editing" class="form-control">
    </div>
    <div class="form-group">
      <label>이메일</label>
      <input v-model="userInfo.email" :disabled="!editing" class="form-control">
    </div>
    <div class="form-group">
      <label>비밀번호</label>
      <input v-model="userInfo.password" :disabled="!editing" class="form-control" type="password">
    </div>
    <div class="form-group">
      <button v-if="!editing" @click="startEditing" class="btn btn-primary">수정시작</button>
      <button v-else @click="finishEditing" class="btn btn-primary">수정완료</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInfo: {},
      editing: false
    };
  },

  mounted() {
    this.fetchUserData();
  },

  methods: {
    fetchUserData() {
      axios.get('http://localhost:8082/api/member/info')
        .then(response => {
          this.userInfo = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },

    saveUserData() {
      axios.put('http://localhost:8082/api/member/info', this.userInfo)
        .then(response => {
          console.log('데이터 저장 성공');
        })
        .catch(error => {
          console.error('데이터 저장 실패:', error);
        });
    },

    startEditing() {
      this.editing = true;
    },

    finishEditing() {
      this.editing = false;
      this.saveUserData();
    },
  }
};
</script>

<style>
  .container {
    margin-top: 50px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
  }

  .btn-primary {
    margin-right: 10px;
  }  

  .btn-secondary {
    margin-right: 10px;
    background-color: #f5f5f5;
    border-color: #f5f5f5;
  }
</style>