<template>
    <div class="container my-5">
      <h1>{{ article.title }}</h1>
      <hr>
      <p class="text-muted">{{ article.author }} - {{ article.published }}</p>
      <hr>
      <img :src="article.image" class="img-fluid mb-4">
      <div v-html="article.content"></div>
    </div>
    <div>
      <textarea v-model="comment"></textarea>
    </div>
    <div>
      <button @click="$emit('save')">저장</button>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        article: {
          title: '샘플 기사 제목',
          author: '홍길동',
          published: '2023-05-10',
          image: 'https://picsum.photos/id/237/600/400',
          content: '<p>샘플 기사 내용</p>'
        }        
      }
    }
  }
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
  </style>
  