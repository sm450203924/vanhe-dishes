<template>
  <div class="cart">
    <van-nav-bar :title="title" fixed class="nav-bar"/>
    <article>
      <van-swipe-cell
        v-for="(item, index) in cartItems"
        :key="index"
        :name="item.foodID"
      >
        <van-checkbox
          :name="item"
          v-model="item.isSelected"
          @change="updateCartSelected(item.foodID, item.isSelected)"
          checked-color="#da251d"
          class="cart-item"
        >
          <van-card
            :price="item.price"
            :origin-price="item.originPrice"
            :title="item.name"
            :thumb="item.picture"
          >
            <div slot="footer">
<!--                <van-button size="mini">-</van-button>
              2
              <van-button size="mini">+</van-button>-->
              <van-stepper v-model="item.quantity" min="1" max="20" @click.native.stop=" updateCartInfo(item.quantity, item.foodID)"/>

            </div>
          </van-card>
        </van-checkbox>

        <template slot="right">
          <van-button square type="danger" text="删除" @click="removeFromCart(item.foodID, index)"/>
        </template>
      </van-swipe-cell>
      <div class="check-out-tabbar">
        <span>共 <strong>{{$store.getters.getFoodQuantityAndTotalPrice.quantity}}</strong> 份，</span>
        <span>合计： <span class="check-out-price">￥{{$store.getters.getFoodQuantityAndTotalPrice.totalPrice}}</span></span>
        <van-button round type="danger" class="check-out-btn" @click="check">结&nbsp;算</van-button>
      </div>
    </article>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Button, NavBar, SwipeCell, Stepper, SubmitBar } from 'vant'
export default {
  name: 'Cart',
  data () {
    return {
      title: '购物车',
      cartItems: []
    }
  },
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [SwipeCell.name]: SwipeCell,
    [Stepper.name]: Stepper,
    [SubmitBar.name]: SubmitBar
  },
  methods: {
    getAllCart () {
      this.axios
        .get('./data/food.json')
        .then((response) => {
          const carts = this.$store.state.cart
          // console.log(carts);
          const food = response.data
          const cartItems = []

          for (let i = 0; i < carts.length; i++) {
            for (let j = 0; j < food.length; j++) {
              if (carts[i].foodID === food[j].foodID) {
                cartItems[i] = { ...carts[i], ...food[j] }
              }
            }
          }
          this.cartItems = cartItems
          // console.log(cartItems)
        })
    },
    removeFromCart (foodID, index) {
      this.cartItems.splice(index, 1)
      this.$store.commit('removeFromCart', foodID)
    },
    updateCartInfo (quantity, foodID) {
      this.$store.commit('updateCartInfo', { quantity, foodID })
    },
    updateCartSelected (foodID, isSelected) {
      this.$store.commit('updateCartSelected', { foodID, isSelected })
    },
    check () {
      this.$router.push({ name: 'Check' })
    }
  },
  created () {
    this.getAllCart()
  }
}
</script>

<style lang="scss" scoped>
  article{
    padding-top:46px;
    padding-bottom: 50px;
  }
  .check-out-tabbar{
    padding:10px;
    box-sizing: border-box;
    width:100%;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 50px;
  }
  .check-out-btn{
    margin-left:20px;
    padding: 0 30px;
  }
  .check-out-price{
    color: #f44;
    font-weight: 600;
    font-size: 18px;
  }
</style>
