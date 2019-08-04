<template>
<article>
  <van-nav-bar
    :title="title"
    left-arrow
    @click-left="back"
    fixed
  />
  <van-circle
    v-model="currentRate"
    color="#ff4444"
    size="200px"
    layer-color="#fff"
    :text="text"
    :rate="100"
    :speed="50"
    :stroke-width="60"
  />
</article>
</template>

<script>
import { Circle, NavBar } from 'vant'
export default {
  name: 'Check',
  data () {
    return {
      title: '结账',
      currentRate: 0
    }
  },
  components: {
    [Circle.name]: Circle,
    [NavBar.name]: NavBar
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  },
  computed: {
    text () {
      if (this.currentRate === 100) {
        this.$store.commit('check')
        return '已结算'
      } else {
        return '付款中'
      }
    }
  }
}
</script>

<style scoped>
  article{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
</style>
