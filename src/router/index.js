import {createRouter,createWebHashHistory}from 'vue-router'
import Home from '../views/home/Home.vue';
const routes=[
    {
        path:'/',
        redirect:'/home'    ////重定向 ，如果访问斜杠结尾，就重定向到home页面
    },
    {
        path:'/home',
        name:'Home',
        component:Home
    },
    {
        path:'/login',
        name:'Login',
        component: () => import(/* webpackChunkName: "login" */"../views/userCenter/Login/Login.vue"),
        
    },
    {
        path:'/activityDetail',
        name:'ActivityDetail',
        component: () => import(/* webpackChunkName: "ActivityDetail" */"../views/activityDetail/ActivityDetail.vue"),
    },
   
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

  export default router;