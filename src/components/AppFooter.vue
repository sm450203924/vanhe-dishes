<template>
  <footer>
    <section>
      <div class="hp-menu-item-content">
        <img src="../../public/images/nav-order.png" alt="">
        <span>在线订餐</span>
      </div>
    </section>
    <section>
      <div class="hp-menu-item-content">
        <img src="../../public/images/nav-myorder.png" alt="">
        <span>我的订单</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
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
  .hp-menu-item-content{

  }
</style>
