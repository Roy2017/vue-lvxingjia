// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import './assets/css/swiper.css'
import './assets/css/lvxingjia.css'
import 'mint-ui/lib/style.css'
import 'animate.css'
import "./common/fonts/iconfont.css"

import './config.js'
// import '../static/js/swiper.min.js'

/*mint ui 组件*/
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// import { Tabbar, TabItem } from 'mint-ui';
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);
/************************************/

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
