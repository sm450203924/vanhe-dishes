<template>
  <van-goods-action>
    <van-goods-action-icon
      icon="chat-o"
      text="客服"
      @click="onClickIcon"
    />
    <van-goods-action-icon
      icon="cart-o"
      text="购物车"
      @click="onClickIcon"
    />
    <van-goods-action-button
      type="warning"
      text="加入购物车"
      @click="onClickButton"
    />
    <van-goods-action-button
      type="danger"
      text="立即购买"
      @click="onClickButton"
    />
  </van-goods-action>
</template>

<script>

    export default {
        name: "MenuDetail"
    }
</script>

<style scoped>

</style>
