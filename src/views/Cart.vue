<template>
  <div class="cart">
    <van-nav-bar :title="title" fixed/>
    <article>
      <van-checkbox-group v-model="result">
        <van-swipe-cell
          :on-close="onClose"
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          <van-checkbox
            :name="item"
            checked-color="#da251d"
            class="cart-item"
          >
            <van-card
              price="2.00"
              origin-price="10.00"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
              <div slot="footer">
<!--                <van-button size="mini">-</van-button>
                2
                <van-button size="mini">+</van-button>-->
                <van-stepper v-model="goodNum" min="1" max="20" integer />

              </div>
            </van-card>
          </van-checkbox>

          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>

      </van-checkbox-group>
    </article>
    <AppFooter :activeItem="url"/>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Button, NavBar, SwipeCell, Stepper } from 'vant'
import AppFooter from '../components/AppFooter'
export default {
  name: 'Cart',
  data () {
    return {
      url: 'cart',
      title: '购物车',
      list: ['a', 'b', 'c'],
      result: [],
      goodNum: 1
    }
  },
  components: {
    AppFooter,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    [SwipeCell.name]: SwipeCell,
    [Stepper.name]: Stepper
  }

}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
  article{
    padding-top:46px;
  }
</style>
