<template>
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
      <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart" info="0">
        购物车
      </van-tabbar-item>
      <van-tabbar-item name="my-information" icon="user-o" to="/my-information">
        我的
      </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    activeItem: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      active: this.activeItem
    }
  },
  created () {
    // this.active = this.activeItem.toLowerCase()
  }

}
</script>

<style lang="scss" scoped>
  footer{
    height:60px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px #e1e1e1 solid;
  }
  section{
    width:50%;
    display: inline-block;
    padding:10px 0;
    vertical-align: middle;
    img{
      height: 26px;
    }
    span{
      display: block;
      font-weight: 600;
      height: 14px;
      font-size: 14px;
    }
  }
</style>
