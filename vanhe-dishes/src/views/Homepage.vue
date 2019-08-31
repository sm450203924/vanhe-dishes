<template>
  <div class="homepage">
    <van-nav-bar :title="title" fixed class="nav-bar"/>
    <article>
      <header class="logo-heading">
        <img src="../../public/images/logo.png" alt="万和烧卤">
      </header>
      <van-search placeholder="输入你想找的美食" @click="popSearch" readonly/>
      <HomepageSearch :is-show="isShow" @cancelSearch='cancelSearch'/>
      <van-swipe :auto="5000" :duration="1000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
      <van-notice-bar mode="closeable" left-icon="volume-o" :scrollable="false">
        最新优惠：满100-18，满50-8，满30-3
      </van-notice-bar>
      <HomepageNav/>
    </article>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, NoticeBar, NavBar } from 'vant'
import HomepageNav from '../components/homepage/HomepageNav'
import HomepageSearch from '../components/homepage/HomepageSearch'

export default {
  name: 'Homepage',
  data () {
    return {
      url: 'homepage',
      title: '首页',
      keyword: '',
      images: [
        './images/img_ssj.jpg',
        './images/img_bqj.jpg',
        './images/img_cs.jpg',
        './images/img_lqy.jpg'
      ],
      isShow: false
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    [NoticeBar.name]: NoticeBar,
    [NavBar.name]: NavBar,
    HomepageNav,
    HomepageSearch
  },
  methods: {
    onSearch () {
      console.log('search')
    },
    popSearch () {
      this.isShow = true
    },
    cancelSearch () {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
  input[type="search"]{
     line-height: 24px;
  }
  article{
    padding-top:46px;
    padding-bottom: 50px;
  }
  .logo-heading {
    background-color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 40px;
    }
  }
  .van-swipe {
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .hp-nav {
    padding: 10px 0;
    background-color: #fff;
  }
</style>
