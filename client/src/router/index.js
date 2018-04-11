import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Courses from "@/components/Courses";
import NewCourse from "@/components/NewCourse";

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
    }
  ]
});
