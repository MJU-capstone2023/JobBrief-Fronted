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
  <div>
    <textarea v-model="scrap_opinion"></textarea>
  </div>
  
  <div v-if="authService.isAuthenticated()">
  <textarea v-model="scrap_opinion"></textarea>
  </div>
  <div v-if="authService.isAuthenticated()">
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
  data() {
    return {
      article: {
      },
    };
  },
  mounted() {
    this.fetchArticle();
    this.checkBookmarkStatus();
  },
  
  methods: {
    fetchArticle() {
      axios
        .get(`http://localhost:8082/api/news/member/${this.newsId}`)
        .then(response => {
          this.article = response.data;
        })
        .catch(error => {
          console.error(error);
        });
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
      axios
        .post(bookmarkApiUrl, {
          newsId: this.article.id,
        })
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
      axios
        .delete(bookmarkApiUrl + this.article.id)
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

button {
  padding: 10px 20px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}
.bookmarked {
  background-color: yellow;
}
</style>
