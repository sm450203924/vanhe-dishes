<template>
  <div class="menu">
    <van-nav-bar :title="title" fixed/>
    <article class="menu-content">
      <div class="menu-item-wrap">
        <van-card
          price="2.00"
          origin-price="10.00"
          desc="描述信息"
          title="商品标题"
          tag="标签"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="footer">
            <!--            <van-button size="small">-</van-button>
                        2
                        <van-button size="small">+</van-button>-->
            <van-stepper v-model="goodNum" min="1" max="20" integer/>
            <van-button type="danger">加入购物车</van-button>
          </div>
        </van-card>
      </div>
    </article>
    <AppFooter :activeItem="url"/>
  </div>
</template>

<script>
  import {Card, Tag, Button, TreeSelect, NavBar, Stepper} from 'vant'
  import AppFooter from '../components/AppFooter'
  // import { Sidebar, SidebarItem } from 'vant'
  export default {
    name: 'Menu',
    data() {
      return {
        url: 'menu',
        title: '菜单',
        activeKey: 0,
        goodNum: 1
        /*      items: [
          {
            // 导航名称
            text: '所有城市',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识
                id: 1,
                // 禁用选项
                disabled: true
              },
              {
                text: '杭州',
                id: 2
              }
            ]
          }
        ],
        // 左侧高亮元素的index
        mainActiveIndex: 0,
        // 被选中元素的id
        activeId: 1 */
      }
    },
    components: {
      AppFooter,
      [Card.name]: Card,
      [Tag.name]: Tag,
      [Button.name]: Button,
      [TreeSelect.name]: TreeSelect,
      [NavBar.name]: NavBar,
      [Stepper.name]: Stepper

      // [Sidebar.name]: Sidebar,
      // [SidebarItem.name]: SidebarItem
    },
    methods: {
      onClickNav(index) {
        this.mainActiveIndex = index
      },
      onClickItem(data) {
        this.activeId = data.id
      }
    }
  }
</script>

<style lang="scss">
  .van-nav-bar {
    background-color: rgba(0, 0, 0, 0.76);
    .van-nav-bar__title {
      color: #fff;
    }
  }
</style>

<style lang="scss" scoped>
  article {
    padding-top: 46px;
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
