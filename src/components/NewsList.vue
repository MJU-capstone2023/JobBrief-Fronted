<template>
  <div class="my-list-group">
    <div v-for="(newsList, index) in newsList" :key="index" class="my-list-group-item" :class="{ active: isActive }" @mouseenter="isActive = true" @mouseleave="isActive = false" @click="goToNews(article.id)">
      <div class="my-list-group-item-header">
        <h5 class="my-list-group-item-title">{{ newsList.title }}</h5>
        <small class="my-list-group-item-date">{{ newsList.pub_date }}</small>
      </div>
      <p class="my-list-group-item-content">
        {{ newsList.summary }}
      </p>
      <small class="my-list-group-item-footer"> {{ newsList.reporter }}</small>
    </div> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      newsList: [
        {
          id: 1,
          title: "“북 IT 인력 수천명, 미국 기업 등에 위장취업”···핵·미사일 개발 ‘자금줄’",
          reporter: "워싱턴 | 김유진 특파원",
          press: "경향신문",
          pub_date: "2023-05-25T13:26:00",
          summary:
            "김건 외교부 한반도평화교섭본부장도 영상 축사에서 북한이 IT 인력을 양성해 가상화폐 탈취 등 불법 사이버 활동으로 핵개발 자금을 벌어들이고 있다고 밝혔다. 북한판 IT 골드러시는 반드시 실패할 것이며, 북한이 불법적인 IT 활동을 통해 단 한 푼도 벌어들이지 못하도록 해야 한다고 강조했다. 한·미 양국은 최근 북한의 불법 사이버 활동을 막기 위한 공조를 강화하고 있다.",
          job: "IT개발",
        },
      ],
    };
  },
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

