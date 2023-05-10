<template>
    <div>
    <img src = "@/assets/배너.png" />
    </div>
    <hr>

    <div>
        <b-card title="Card Title" no-body>
            <b-card-header class="bar" header-tag="nav">
            <b-nav card-header tabs>
                <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
                <b-nav-item to="/" exact exact-active-class="active">전체</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">생산/품질</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">IT 개발</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">인사/총무</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">재무/회계/금융</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">전략/기획</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">영업/영업관리</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">마케팅/MD</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">컬렉션</b-nav-item>
            </b-nav>
            </b-card-header>

            <b-card-body>
            <!-- Child route gets rendered in <router-view> or <nuxt-child> -->
            <router-view></router-view>
            <!-- Or if using Nuxt.js
            <nuxt-child></nuxt-child>
            -->
            </b-card-body>
        </b-card>
    </div>
    
 </template>

<script>
export default {

}
</script>

<style>
    #bar{
        margin-right: 10px;
    }

</style>