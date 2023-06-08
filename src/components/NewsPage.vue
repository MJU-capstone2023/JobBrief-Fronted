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
        <span v-for="(keyword, index) in article.keywords" :key="index">{{ keyword.keywordName }}</span>
      </ul>
    </div>
  </div>

  <div v-if="isAuthenticated">
    <textarea v-model="scrap_opinion"></textarea>
    <button @click="saveScrapOpinion">Save Scrap Opinion</button>
    <button @click="toggleBookmark" :class="{ 'bookmarked': isBookmarked }">
      {{ isBookmarked ? 'Bookmarked' : 'Bookmark' }}
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    newsId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      article: {},
      scrap_opinion: "",
      isBookmarked: false
    };
  },

  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('accessToken');
    }
  },

  mounted() {
    this.fetchArticle();
  },

  methods: {
    fetchArticle() {
      const apiUrl = this.isAuthenticated ? `http://localhost:8082/api/news/member/${this.newsId}` : `http://localhost:8082/api/news/${this.newsId}`;

      axios
        .get(apiUrl)
        .then(response => {
          this.article = response.data;
          console.log(this.article);
        })
        .catch(error => {
          console.error(error);
        });
    },

    saveScrapOpinion() {
      // 스크랩 의견 저장 로직 구현
    },

    toggleBookmark() {
      if (this.isBookmarked) {
        this.removeBookmark();
      } else {
        this.addBookmark();
      }
    },
    
    addBookmark() {
      const bookmarkApiUrl = "http://localhost:8082/api/bookmark/";
      const accessToken = localStorage.getItem('accessToken');

      axios
        .post(bookmarkApiUrl, { newsId: this.article.id }, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(response => {
          this.isBookmarked = true;
          console.log("북마크 추가 완료");
        })
        .catch(error => {
          console.error("북마크 추가 오류:", error);
        });
    },

    removeBookmark() {
      const bookmarkApiUrl = "http://localhost:8082/api/bookmark/";
      const accessToken = localStorage.getItem('accessToken');

      axios
        .delete(bookmarkApiUrl + this.article.id, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(response => {
          this.isBookmarked = false;
          console.log("북마크 삭제 완료");
        })
        .catch(error => {
          console.error("북마크 삭제 오류:", error);
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
