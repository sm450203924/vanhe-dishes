<template>
  <div class="my-order">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="back"
    />
    <van-tabs v-model="activeName" swipeable>
      <van-tab title="全部" name="all">
        <div >
        </div>
        <van-card
          v-for="(item) in foodOrder.all"
          :key="item.orderID"
          :price="item.price"
          :title="item.name"
          :thumb="item.picture"
        >
          <div slot="footer">
            <div class="order-item-footer">
              <span>{{item.time}}</span><span>数量：×{{item.quantity}}</span>
            </div>
          </div>
        </van-card>
      </van-tab>
      <van-tab title="已完成" name="done">
        <van-card
          v-for="(item) in foodOrder.done"
          :key="item.orderID"
          :price="item.price"
          :title="item.name"
          :thumb="item.picture"
        >
          <div slot="footer">
            <div class="order-item-footer">
              <span>{{item.time}}</span><span>数量：×{{item.quantity}}</span>
            </div>
          </div>
        </van-card>
      </van-tab>
      <van-tab title="等待支付" name="unpaid">
        <van-card
          v-for="(item) in foodOrder.unpaid"
          :key="item.orderID"
          :price="item.price"
          :title="item.name"
          :thumb="item.picture"
        >
          <div slot="footer">
            <div class="order-item-footer">
              <span>{{item.time}}</span><span>数量：×{{item.quantity}}</span>
            </div>
          </div>
        </van-card>
      </van-tab>
      <van-tab title="已取消" name="cancel">
        <van-card
          v-for="(item) in foodOrder.cancel"
          :key="item.orderID"
          :price="item.price"
          :title="item.name"
          :thumb="item.picture"
        >
          <div slot="footer">
            <div class="order-item-footer">
              <span>{{item.time}}</span><span>数量：×{{item.quantity}}</span>
            </div>
          </div>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
import { Tab, Tabs, NavBar, Card } from 'vant'

export default {
  name: 'MyOrder',
  data () {
    return {
      title: '我的订单',
      activeName: 'a',
      foodOrder: {},
      food: [],
      order: []
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
      return this.axios
        .get('./data/order.json')
    },
    getAllFood () {
      return this.axios
        .get('./data/food.json')
    },
    setOrderList () {
      const _that = this
      this.axios
        .all([this.getAllOrder(), this.getAllFood()])
        .then(this.axios.spread(function (orderResp, foodResp) {
          const orders = orderResp.data
          const food = foodResp.data
          const foodOrder = []

          for (let i = 0; i < orders.length; i++) {
            for (let j = 0; j < food.length; j++) {
              if (orders[i].foodID === food[j].foodID) {
                foodOrder[i] = { ...orders[i], ...food[j] }
              }
            }
          }
          _that.foodOrder.all = foodOrder
          _that.foodOrder.done = foodOrder.filter(item => item.orderStatus === 1)
          _that.foodOrder.unpaid = foodOrder.filter(item => item.orderStatus === 2)
          _that.foodOrder.cancel = foodOrder.filter(item => item.orderStatus === 3)
        }))
    }
  },
  created () {
    this.setOrderList()
  }
}
</script>

<style>
  .van-nav-bar .van-icon {
    color: #fff;
  }
</style>

<style lang="scss" scoped>
.order-item-footer{
  display: flex;
  justify-content: space-between;
  padding-left: 85px;
}
  .footer{
    display: none;
  }
</style>
