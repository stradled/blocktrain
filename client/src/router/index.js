import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Courses from "@/components/Courses";
import NewCourse from "@/components/NewCourse";
import Course from "@/components/Course";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/courses",
      name: "Courses",
      component: Courses
    },
    {
      path: "/courses/new",
      name: "NewCourse",
      component: NewCourse
    },
    {
      path: "/course/:course_urlfriendly_display_name",
      name: "Course",
      component: Course
    }
  ]
});
