<template>
  <div class="my-list-group">
    <div v-for="(newsList, index) in displayedNews" :key="index" class="my-list-group-item" :class="{ active: isActiveIndex === index }" @mouseenter="isActiveIndex = index" @mouseleave="isActiveIndex = null" @click="goToNews(newsList.id)">
      <div class="my-list-group-item-header">
        <h5 class="my-list-group-item-title">{{ newsList.title }}</h5>
        <small class="my-list-group-item-date">{{ newsList.pub_date }}</small>
      </div>
      <p class="my-list-group-item-content">
        {{ newsList.summary }}
      </p>
      <small class="my-list-group-item-footer">{{ newsList.reporter }}</small>
    </div>
    <hr>
    <nav v-if="totalPages > 1" aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <button class="page-link" @click="prevPage">Previous</button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': page === currentPage }">
          <button class="page-link" @click="goToPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isActiveIndex: null,
      newsList: [],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  mounted() {
    this.fetchNewsList(); // 컴포넌트가 마운트되면 뉴스 목록을 가져옵니다.
  },
  methods: {
    fetchNewsList() {
      axios.get('http://localhost:8082/api/news?job=finance-accounting')
        .then(response => {
          this.newsList = response.data.newsList;
          this.currentPage = response.data.currentPage; 
        })
        .catch(error => {
          console.error(error);
        });
    },
    goToNews(newsId) {
      // 뉴스 페이지로 이동
      this.$router.push(`/newsPage/${newsId}`);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  },
  computed: {
    displayedNews() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.newsList.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.newsList.length / this.itemsPerPage);
    }
  }
};
</script>

<style>
  .my-list-group-item {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 10px;
    cursor: pointer;
  }
  
  .my-list-group-item.active {
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  .my-list-group-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .my-list-group-item-title {
    margin-bottom: 0;
  }

  .my-list-group-item-date,
  .my-list-group-item-footer {
    color: #6c757d;
  }

  .my-list-group-item-content {
    margin-bottom: 0.5rem;
  }

  .my-list-group-item-footer {
    font-size: 0.875rem;
  }

  .pagnation{
    align-items: center;
  }
</style>

