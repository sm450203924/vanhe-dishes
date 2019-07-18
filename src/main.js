import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/icons-extra.css'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'

/*
import { Header, Tabbar, TabItem } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
*/

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
