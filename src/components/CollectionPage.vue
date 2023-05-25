<template>
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
      items: ['북마크', '스크랩', '최근 본 뉴스']
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
      padding: 50px;
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