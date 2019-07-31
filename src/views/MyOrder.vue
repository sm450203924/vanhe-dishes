<template>
  <div class="my-order">
    <van-nav-bar
      title="我的订单"
      left-arrow
      @click-left="back"
    />
    <van-tabs v-model="activeName" swipeable>
      <van-tab title="全部" name="all">
        <div >
        </div>
        <van-card
          v-for="(item,index) in order.done"
          :key="index"
          price="2.00"
          origin-price="10.00"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >

          <div slot="footer">
            <!--                <van-button size="mini">-</van-button>
                            2
                            <van-button size="mini">+</van-button>-->
            <van-stepper v-model="goodNum" min="1" max="20" integer />
            {{item.foodID}}
          </div>
        </van-card>
      </van-tab>
      <van-tab title="已完成" name="done">已完成</van-tab>
      <van-tab title="等待支付" name="unpaid">等待支付</van-tab>
      <van-tab title="已取消" name="cancel">已取消</van-tab>
    </van-tabs>
  </div>

</template>

<script>
import { Tab, Tabs, NavBar, Card } from 'vant'

export default {
  name: 'MyOrder',
  data () {
    return {
      activeName: 'a',
      order: {}
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [NavBar.name]: NavBar,
    [Card.name]: Card
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    getAllOrder () {
      this.axios
        .get('./data/order.json')
        .then(response => {
          this.order.done = response.data.done.item
        })
        .catch(function () {
          console.log('error')
        })
    }
  },
  created () {
    this.getAllOrder()
  }
}
</script>

<style>
  .van-nav-bar .van-icon {
    color: #fff;
  }
</style>
