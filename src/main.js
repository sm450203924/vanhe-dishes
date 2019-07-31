import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css/normalize.css'
import { Swipe, SwipeItem, Tabbar, TabbarItem, Card, Lazyload,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant'

import './assets/style.scss'

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
Vue.use(Tabbar).use(TabbarItem).use(Card).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
