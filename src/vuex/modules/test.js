import {
  TEST
} from '../mutation-types';

const state={
  list:[]
}
const mutations={
  [TEST](state,data){
    state.list=[1,2]
  }
}

export default{
  state,
  mutations
}
