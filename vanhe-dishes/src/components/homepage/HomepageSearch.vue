<template>
  <transition>
    <div class="search-container" v-show="isShow">
      <form action="/">
        <van-search
          v-model="keywords"
          placeholder="请输入搜索关键词"
          show-action
          @cancel="cancelSearch"
          @search="onSearch"
          v-debounce="enterSearchKeywords"
        />
      </form>
      <van-cell-group>
        <van-cell
          v-for="(item, index) in searchList"
          :key="index"
          :title="item.name"
          @click="goToDetail(item.foodID)"/>
      </van-cell-group>
    </div>
  </transition>
</template>

<script>
import { Cell, CellGroup, Search } from 'vant'

export default {
  name: 'HomepageSearch',
  components: {
    [Search.name]: Search,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      result: '',
      searchList: null,
      keywords: ''
    }
  },
  methods: {
    cancelSearch () {
      this.$emit('cancelSearch')
    },
    goToDetail (id) {
      this.$router.push({
        path: '/food-details/',
        query: {
          id: id
        }
      })
    },
    enterSearchKeywords () {
      this.axios
        .get('./data/food.json')
        .then((response) => {
          const food = response.data
          this.searchList = food.filter(item => {
            if (this.keywords) {
              return item.name.includes(this.keywords)
            }
          })
        })
    },
    onSearch () {
      this.$router.push({
        name: 'Menu',
        params: {
          keywords: this.keywords
        }
      })
    }
  },
  directives: {
    debounce: {
      inserted: function (el, binding) {
        let timer
        el.addEventListener('keyup', () => {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            binding.value()
          }, 300)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-container{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:1;
    background-color: #fff;
  }

  .v-enter {
    opacity: 0;
    position: absolute;
    transform: translateY(100%);
  }

  .v-leave-to {
    opacity: 0;
    position: absolute;
    transform: translateY(-100%);
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }

</style>
