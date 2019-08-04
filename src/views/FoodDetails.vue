<template>
  <article class="food-details">
    <van-nav-bar
      :title="food.name"
      left-arrow
      @click-left="back"
    />
    <van-image
      class="food-details-img"
      :src="food.picture">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      <template v-slot:error>加载失败</template>
    </van-image>
    <van-cell-group>
      <van-cell>
        <div class="food-details-title">{{ food.name }}</div>
        <div class="food-details-descirbe">{{ food.describe }}</div>
        <div class="food-details-price">￥ {{ food.price }}</div>
      </van-cell>
      <van-cell class="food-details-express">
        <van-col span="10">预订：可预订</van-col>
        <van-col span="14">剩余：若干</van-col>
      </van-cell>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click.self="addToCart(food.foodID, 1, food.price)">
        加入购物车
      </van-goods-action-button>
    </van-goods-action>
  </article>
</template>

<script>
import {
  Col,
  Icon,
  Cell,
  CellGroup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Image,
  Lazyload
} from 'vant'
export default {
  components: {
    [Lazyload.name]: Lazyload,
    [Image.name]: Image,
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data () {
    return {
      name: 'FoodDetails',
      food: {}
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    },
    getFoodDetailsById () {
      this.axios
        .get('./data/food.json')
        .then((response) => {
          const foodID = this.$route.query.id
          const food = response.data
          const targetFood = food.find(item => item.foodID === foodID)
          this.food = targetFood
          console.log(targetFood)
        })
    },
    onClickCart () {
      this.$router.push('/cart/')
    },
    addToCart (id, selectedCount, price) {
      let foodInfo = {
        foodID: id,
        quantity: selectedCount,
        price: price,
        isSelected: true
      }
      // 调用 store 中的 mutations 来将商品加入购物车
      this.$store.commit('addToCart', foodInfo)
    }
  },
  created(){
    this.getFoodDetailsById()
  }
}
</script>

<style lang="scss" scoped>
  .van-goods-action{
    z-index: 2;
  }
  .food-details {
    padding-bottom: 50px;
    &-descirbe{
      color: #969799;
    }
    &-img {
        width: 100%;
        display: block;
    }
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
      font-size: 20px;
      text-align: right;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    &-tag {
      margin-left: 5px;
    }
  }
</style>
