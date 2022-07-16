import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home'),
      },
      {
        path: '/house',
        component: () => import('@/views/house'),
      },
      {
        path: '/my',
        component: () => import('@/views/my'),
      },
      {
        path: '/xinxi',
        component: () => import('@/views/xinxi'),
      },
    ],
  },
  {
    path: '/shoucang',
    component: () => import('@/views/my/shoucang'),
  },
  {
    path:'/houseList',
    component:()=>import('@/views/my/shoucang/houseList')
  },
  {
    path: '/article/:atricleId',
    component: () => import('@/views/article'),
  },
  {
    path:'/location',
    component:()=>import('@/views/location')
  }
];
if(toString.path=='/login'){
  next(true)
}else{
  if(!this.$stroe.state.UId){
    next('/login')
  }else{
    next(true)
  }
}
const router = new VueRouter({
  routes,
});
export default router;
