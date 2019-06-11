import {RouteConfig} from "vue-router";

const UserCenterRouter: RouteConfig = {
  path: 'userInfoCenter',
  component: () => import('@/views/UserInfo/UserCenter.vue'),
  children: [
    {
      path: '/userInfoCenter/userDetails',
      name: 'userDetails',
      meta: {title: '个人信息'},
      component: () => import('@/views/UserInfo/UserDetails.vue')
    }
  ]
};


export default UserCenterRouter;
