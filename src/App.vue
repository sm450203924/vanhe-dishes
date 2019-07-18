<template>
  <div id="app">
    <mt-header title="万和烧卤" fixed class="the-toolbar">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="order">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">在线订餐</span>
<!--        <img slot="icon" src="../public/images/nav-order.png">
        在线订餐-->
      </mt-tab-item>
      <mt-tab-item id="my-order">
        <span class="mui-icon mui-icon-extra mui-icon-extra-prech"></span>
        <span class="mui-tab-label">我的订单</span>
<!--        <img slot="icon" src="../public/images/nav-myorder.png">
        我的订单-->
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
}
  .the-toolbar{
    background-color: #da251d;
  }
</style>
