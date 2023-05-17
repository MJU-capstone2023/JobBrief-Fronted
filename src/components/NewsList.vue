<template>
    <div>
      <h1>게시판 글 목록</h1>
      <ul>
        <li v-for="post in posts" :key="post.id" @click="goToPost(post.id)">
          <h2>제목 : {{ article.title }}</h2>
          <p>작성자: {{ article.author }}</p>
          <p>작성일: {{ article.date }}</p>
        </li>
      </ul>
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
          content: '<p>샘플 기사 내용</p>'
        }        
      }
    }
}
</script>

<style>

</style>