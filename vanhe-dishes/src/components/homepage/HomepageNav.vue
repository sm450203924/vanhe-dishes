<template>
  <div class="hp-nav">
    <van-grid clickable :column-num="2" :border="false">
      <van-grid-item
        text="路由跳转"
        to="/menu"
      >
        <div class="hp-nav-item-wrap">
          <h1>预先订餐</h1>
          <p>预先订购，到店取餐</p>
        </div>
      </van-grid-item>

      <van-grid-item
        text="URL 跳转"
        to="/menu"
      >
        <div class="hp-nav-item-wrap">
          <h1>到店排队</h1>
          <p>已在店内，马上制作</p>
        </div>

      </van-grid-item>
    </van-grid>

  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'HomepageNav',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
}
</script>

<style scoped lang="scss">
  .hp-nav-item-wrap{
    text-align: center;
    border: 1px #c8c9cc solid;
    padding: 10px 20px;
    border-radius: 8px;
    h1{
      font-size: 18px;
    }
    p{
      font-size: 15px;
    }
  }

</style>
