<template>
  <div class="my-list-group">
    <div v-for="(article, index) in articles" :key="index" class="my-list-group-item" :class="{ active: isActive }" @mouseenter="isActive = true" @mouseleave="isActive = false" @click="goToNews(article.id)">
      <div class="my-list-group-item-header">
        <h5 class="my-list-group-item-title">{{ article.title }}</h5>
        <small class="my-list-group-item-date">{{ article.published }}</small>
      </div>
      <p class="my-list-group-item-content">
        {{ article.content }}
      </p>
      <small class="my-list-group-item-footer"> {{ article.author }}</small>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: '샘플 기사 제목 1',
          author: '홍길동',
          published: '2023-05-10',
          content: '샘플 기사 내용 1'
        },
       
        // 추가적인 기사 데이터...
      ],
      isActive: false
    };
  }
}
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
</style>

