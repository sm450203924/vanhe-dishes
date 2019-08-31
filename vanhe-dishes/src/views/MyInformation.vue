<template>
  <div class="my-information">
    <van-nav-bar :title="title" fixed/>
    <article>
      <section class="vip-card">
        <div class="user-avatar">
          <img src="../../public/images/avatar.jpg" alt="用户头像">
        </div>
        <div class="user-information">
          <p class="user-id"><span>会员ID：</span>450203924</p>
          <h4 class="user-name">Sammy</h4>
        </div>
      </section>
      <van-cell-group>
        <!--<van-cell icon="records" title="我的订单" is-link to="/my-order"/>-->
        <van-cell icon="records" title="我的订单" @click="toMyOrder"/>
      </van-cell-group>
    </article>
    <!--<AppFooter :activeItem="url"/>-->
  </div>

</template>

<script>
  import {NavBar, Cell, CellGroup} from 'vant'
  import AppFooter from '../components/AppFooter'

  export default {
    name: 'MyOrderInformation',
    data() {
      return {
        title: '我的'
      }
    },
    methods:{
      toMyOrder(){
        this.$router.push({
          path: '/my-order'
        })
      }
    },
    components: {
      AppFooter,
      [NavBar.name]: NavBar,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup
    }
  }
</script>

<style lang="scss" scoped>
  article {
    padding-top: 46px;
    padding-bottom: 50px;
  }

  .vip-card {
    font-size: 14px;
    height: 80px;
    margin: 10px;
    display: flex;
    background-color: #fff;
  }

  .user-avatar {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;

      border-radius: 50%;
    }
  }

  .user-information {
    width: 70%;
    text-align: left;
    span {
      /*font-weight: 600;*/
    }
  }

</style>
