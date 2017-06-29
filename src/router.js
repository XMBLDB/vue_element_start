import Vue from 'vue';
// 注册路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 页面组件
// 登录页
import Login from './page/Login.vue';
// 管理页
import Management from './page/Management.vue';
// 404页面
import NotFound from './page/NotFound.vue';

// 路由配置参数
const routes=[
  {path:'/',component:Login,name:'Login'},
  {path:'/Management',component:Management,name:'Management'},
  {path:'*',component:NotFound,name:'NotFound'}
]
// 生成路由
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:routes
})
// 每个页面配置标题
router.afterEach((to,from,next)=>{
  document.title=to.name
})

export default router;
