import Vue from 'vue';

// 开启debug
Vue.config.debug=true;

// 加载vuex引入store
import store from './vuex/store';
// 引入路由
import router from './router';
// 注册全局过滤器
import fnFilter from './filter';
fnFilter(Vue);

// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
// 注册element-ui组件
Vue.use(ElementUI);

// 主Component
import App from './App.vue';

// 注册实例
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
