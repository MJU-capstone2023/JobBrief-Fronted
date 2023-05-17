<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="register" class="card">
          <h2 class="card-header">Register</h2>
          <div class="card-body">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-block">아이디 중복확인</button>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="form-group">
              <label for="confirm-password">Confirm Password:</label>
              <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword">
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
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
    };
  },
  methods: {
    register() {
      // 서버로 회원 가입 정보를 보내는 코드를 작성하세요
    },
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