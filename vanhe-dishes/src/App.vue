<template>
  <div id="app">
    <transition>
    <router-view></router-view>
    </transition>
    <footer>
      <van-tabbar
        v-model="active"
        active-color="#da251d"
      >
                <van-tabbar-item name="homepage" icon="wap-home" to="/homepage">
                  首页
                </van-tabbar-item>
                <van-tabbar-item name="menu" icon="notes-o" to="/menu">
                  菜单
                </van-tabbar-item>
                <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart" :info="$store.getters.getAllQuantity">
                  购物车
                </van-tabbar-item>
                <van-tabbar-item name="my-information" icon="user-o" to="/my-information">
                  我的
                </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar } from 'vant'

export default {
  name: 'app',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      active: 'homepage',
      navText: '',
/*      tabbar: [
        { name: 'homepage', text: '首页', icon: 'wap-home', to: '/homepage', info: '' },
        { name: 'menu', text: '菜单', icon: 'notes-o', to: '/menu', info: '' },
        { name: 'cart', text: '购物车', icon: 'shopping-cart-o', to: '/cart', info: '0' },
        { name: 'my-information', text: '我的', icon: 'user-o', to: '/my-information', info: '' }
      ]*/
    }
  }
}
</script>

<style lang="scss">
  .van-nav-bar {
    background-color: rgba(0, 0, 0, 0.76);
    .van-nav-bar__title {
      color: #fff;
    }
  }

  footer {
    > div {
      height: 60px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-top: 1px #e1e1e1 solid;
    }
    section {
      width: 50%;
      display: inline-block;
      padding: 10px 0;
      vertical-align: middle;
      img {
        height: 26px;
      }
      span {
        display: block;
        font-weight: 600;
        height: 14px;
        font-size: 14px;
      }
    }
  }

</style>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }
</style>
