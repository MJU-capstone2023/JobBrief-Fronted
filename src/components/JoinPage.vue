<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="register" class="card">
          <h2 class="card-header">회원가입</h2>
          <div class="card-body">
            <div class="form-group">
              <label for="username">이름</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div><div class="form-group">
              <label for="id">아이디</label>
              <input type="text" class="form-control" id="id" v-model="id">
            </div>
            <div class="card-footer">
              <button type="idconfirm" class="btn btn-primary btn-block">아이디 중복확인</button>
            </div>
            <div class="form-group">
              <label for="password">비밀번호</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="form-group">
              <label for="email">이메일</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="studentid">학번</label>
              <input type="studentid" class="form-control" id="studentid" v-model="studentid">
            </div>
          </div>

          <div class="card-footer">
            <button type="submit" @click="join" class="btn btn-primary btn-block">가입</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      studentid: ""

    };
  },
  methods: {
    join() {
      // 서버로 회원 가입 정보를 보내는 코드를 작성하세요
    },

    idconfirm(){
      // 아이디 중복 확인 로직
    
    }
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f5f5f5;
}

.card-footer {
  background-color: #f5f5f5;
}
</style>