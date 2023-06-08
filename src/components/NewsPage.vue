<template>
  <div class="container my-5">
  <h1>{{ article.title }}</h1>
  <hr>
  <p class="text-muted">{{ article.reporter }} - {{ article.pub_date }}</p>
  <hr>
  <div>{{ article.content }}</div>
  <div>
    <h5>Keywords:</h5>
    <ul>
      <span v-for="(keywords, index) in article.keywords" :key="index">{{ keywords.keywordName }}</span>
    </ul>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  methods: {

  },
  
  data() {
    
    return {
      article: {},
    };
  },
  mounted() {
    this.fetchArticle();
  },
  methods: {
    fetchArticle() {
      axios
        .get(`http://localhost:8082/api/news/${this.newsId}`) // API 엔드포인트를 지정합니다.
        .then(response => {
          this.article = response.data; // 응답 데이터를 기사 데이터에 저장합니다.
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: bold;
}

p {
  font-size: 1.25rem;
}

img {
  max-width: 100%;
}

.container {
  max-width: 800px;
}
ul span {
  display: inline-block;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #f2f2f2;
  color: #333;
  border-radius: 5px;
  font-size: 0.9rem;
}

</style>
