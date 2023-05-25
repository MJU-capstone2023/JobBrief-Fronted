<template>
    <div>
        <img src = "@/assets/배너.png" />
    </div>
    <div class="nav-bar">
        <ul>
        <li v-for="(item, index) in items" :key="index" @click="handleItemClick(index)">
            {{ item }}
        </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['전체', '생산/품질', 'IT개발', '인사/총무', '재무/회계/금융', '전략/기획', '영업/영업관리', '마케팅/MD', '컬렉션', '마이페이지', '로그인', '회원가입']
    }
  },

  methods: {
    handleItemClick(index) {
      console.log(`Item ${index} clicked`)
      // 이곳에서 클릭 이벤트 핸들링 로직을 작성합니다.
    }
  }
}
</script>

<style>
.nav-bar {
    padding: 10px;
    color: black;
    display: flex;
    justify-content: center;
}

.nav-bar ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav-bar li {
    padding: 10px;
    cursor: pointer;
}

.nav-bar li:hover {
    background-color: #dad5d5;
}
</style>