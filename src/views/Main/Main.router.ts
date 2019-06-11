import {RouteConfig} from 'vue-router'
// import BlogRouter from '@/views/Bundle/Blog/Blog.router'
import CourseRouter from '@/views/Course/Course.router'
// import ManagementRouter from '@/views/Management/Management.router'
import UserCenterRouter from '@/views/UserInfo/UserCenter.router'


const MainRouter: RouteConfig = {
    path:'/',
    component: () => import(/* webpackChunkName: "group-main" */ '@/views/Main/Main.vue'),
    children:[
        UserCenterRouter,
        CourseRouter,
        {
            path:'',
            name: 'Home',
            meta:{title:'首页'},
            component: () => import('@/views/Main/Home.vue')
        },
        {
            path:'about',
            name: 'About',
            meta: {title: '关于'},
            component: () => import('@/views/Main/About.vue')

        }
    ]
};

export default MainRouter;
