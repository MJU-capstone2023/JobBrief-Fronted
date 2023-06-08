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
    const accessToken = localStorage.getItem("accessToken");
    const apiUrlA = `http://localhost:8082/api/news/member/${this.newsId}`;
    const apiUrl = `http://localhost:8082/api/news/${this.newsId}`;
    const apiUrlToUse = this.isAuthenticated ? apiUrlA : apiUrl;

    axios
      .get(apiUrlToUse, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        this.article = response.data;
        console.log(this.article);
      })
      .catch(error => {
        console.error(error);
      });
  },
  saveScrapOpinion() {
    const accessToken = localStorage.getItem("accessToken");
    const scrapOpinionApiUrl = `http://localhost:8082/api/scrap-opinion/${this.newsId}`;

    // 요청 본문에 opinion 값을 추가하여 전송합니다.
    const requestData = {
      newsId: this.article.id,
      opinion: this.scrap_opinion
    };

    axios
      .post(
        scrapOpinionApiUrl,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      .then(response => {
        console.log("스크랩 의견 저장 성공");
        // 성공적으로 저장되었을 때의 동작을 수행하세요
      })
      .catch(error => {
        console.error("스크랩 의견 저장 실패:", error);
        // 저장 실패 시의 동작을 수행하세요
      });
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
