import {RouteConfig} from "vue-router";

const CourseRouter: RouteConfig = {
  path: 'course',
  component: () => import('@/views/Course/CourseWrapper.vue'),
  children: [
    {
      path: '',
      name: 'Course',
      meta: {title: '全部课程'},
      component: () => import('@/views/Course/Courses.vue')
    }
  ]
};

export default CourseRouter;
