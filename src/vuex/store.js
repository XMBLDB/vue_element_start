import Vue from 'vue';
// 注册vuex
import Vuex from 'vuex';
Vue.use(Vuex);

// actions
import * as actions from './actions';
// getters
import * as getters from './getters';

// module test
import test from './modules/test';

// 生成到处store
export default new Vuex.Store({
  modules:{
    test
  },
  actions,
  getters
})
