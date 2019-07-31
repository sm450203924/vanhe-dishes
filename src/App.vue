<template>
  <div id="app">
    <!--<transition>-->
      <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'app',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 'homepage'
    }
  },
  watch: {
    /*    selected (newval, oldval) {
      switch (newval) {
        case 'home':
          this.$router.push({
            path: '/homepage'
          })
          break
        case 'menu':
          this.$router.push({
            path: '/menu'
          })
          break
        case 'cart':
          this.$router.push({
            path: '/cart'
          })
          break
        case 'my-information':
          this.$router.push({
            path: '/my-information'
          })
          break
      }
    } */
  }

}
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*padding-top: 40px;*/
    overflow-x: hidden;
  }

  .v-enter{
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>
