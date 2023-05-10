<template>
  <div>
    로그인 테스트 컴포넌트
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="login" class="card">
          <h2 class="card-header">Login</h2>
          <div class="card-body">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" v-model="password">
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-primary btn-block">Login</button>
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
    };
  },
  methods: {
    login() {
      // 로그인 로직
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