<template>
  <div class="menu">
    <van-nav-bar :title="title" fixed/>
    <article class="menu-content">
      <div class="menu-item-wrap">
        <van-card
          v-for="foodItem in food"
          :key="foodItem.foodID"
          :price="foodItem.price"
          :origin-price="foodItem.originPrice"
          :desc="foodItem.describe"
          :title="foodItem.name"
          tag="特价"
          :thumb="foodItem.picture"
          @click-thumb="getDetail(foodItem.foodID)"
        >
          <div slot="footer">
            <van-stepper v-model="foodItem.selectedCount" integer/>
            <van-button type="danger" @click.self="addToCart(foodItem.foodID, foodItem.selectedCount, foodItem.price)">加入购物车</van-button>
          </div>
        </van-card>
      </div>
    </article>
  </div>
</template>

<script>
import { Card, Tag, Button, TreeSelect, NavBar, Stepper } from 'vant'
export default {
  name: 'Menu',
  data () {
    return {
      url: 'menu',
      title: '菜单',
      activeKey: 0,
      food: null
    }
  },
  components: {
    [Card.name]: Card,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [TreeSelect.name]: TreeSelect,
    [NavBar.name]: NavBar,
    [Stepper.name]: Stepper
  },
  methods: {
    getDetail (id) {
      this.$router.push({
        path: '/food-details/',
        query: {
          id: id
        }
      })
    },
    getAllFoodInfo () {
      this.axios
        .get('./data/food.json')
        .then(response => {
          let food = response.data
          // 如果通过非搜索功能进入这个页面
          if (!this.$route.params.keywords) {
            this.food = food
          } else {
            // 如果通过搜索功能进入此页面
            this.food = food.filter(item => item.name.includes(this.$route.params.keywords))
          }
        })
        .catch(function () {
          console.log('error')
        })
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
  created () {
    this.getAllFoodInfo()
  }
}
</script>

<style lang="scss" scoped>
  article {
    padding-top: 46px;
    padding-bottom: 50px;
  }

  .menu-item-wrap {
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
  }

  .van-card {
    font-size: 16px;
  }

  .van-card__origin-price {
    font-size: 13px;
  }

  .van-button {
    font-size: 18px;
  }

  .van-card__title {
    font-size: 18px;
  }

  .van-card__footer {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

</style>
