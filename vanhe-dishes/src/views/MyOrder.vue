<template>
  <div class="my-order">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="back"
      fixed
    />
    <article>
      <van-tabs
        v-model="activeTab"
        swipeable
        lazy-render>
        <van-tab title="全部" name="all">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
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
          </van-list>
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
    </article>
  </div>

</template>

<script>
import { Tab, Tabs, NavBar, Card, List } from 'vant'

export default {
  name: 'MyOrder',
  data () {
    return {
      title: '我的订单',
      activeTab: 'all',
      foodOrder: {},
      food: [],
      order: [],
      loading: true,
      finished: false,
      error: false,
      list: []
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [NavBar.name]: NavBar,
    [Card.name]: Card,
    [List.name]: List
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
    getOrderList () {
      return this.axios
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
          return foodOrder
        }))
        .catch(function () {
          console.log('error')
        })
    },
    setOrderList () {
      setTimeout(() => {
        this.getOrderList().then((data) => {
          let foodOrder = data
          this.foodOrder.all = foodOrder
          this.foodOrder.done = foodOrder.filter(item => item.orderStatus === 1)
          this.foodOrder.unpaid = foodOrder.filter(item => item.orderStatus === 2)
          this.foodOrder.cancel = foodOrder.filter(item => item.orderStatus === 3)
          this.loading = false
          this.finished = true
        })
      }, 500)
    },
    onLoad () {
      // 异步更新数据，待更新
      this.setOrderList()
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
    z-index: 2;
  }
</style>

<style lang="scss" scoped>
  article {
    padding-top: 46px;
    padding-bottom: 50px;
  }
.order-item-footer{
  display: flex;
  justify-content: space-between;
  padding-left: 85px;
}
  .footer{
    display: none;
  }
</style>
