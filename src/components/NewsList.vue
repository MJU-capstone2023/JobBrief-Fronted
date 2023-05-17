<template>
    <div>
      <h1>뉴스 기사 리스트</h1>
      <ul>
        <li>
          <h2>{{ article.title }}</h2>
          <p>작성자: {{ article.author }}</p>
          <p>발행일: {{ article.published }}</p>
          <div v-html="article.content"></div>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
    data() {
      return {
        article: {
          id: 1,
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