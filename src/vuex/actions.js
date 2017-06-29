// ajax请求
import axios from 'axios';
import {
  TEST
} from './mutation-types';

export function test(store,data){
  store.commit(TEST,data)
}

export function testAjax(store,data){
  axios({
    method:'get',
    url:'../data/friend.json'
  }).then(res=>{
    console.log(res.data)
  }).catch(err=>{
    console.log(err);
  })
}
