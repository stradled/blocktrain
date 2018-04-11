<template>
  <div class="courses">
    <h1>Courses</h1>
    <p>This file will list all the courses.</p>

      <div v-for="(course, index) in courses" :key="index">
        <h2>{{course.title}}</h2>
        <p>{{course.description}}</p>
    </div>
  </div>
</template>


<script>
import CoursesService from "@/services/CoursesService";
export default {
  name: "courses",
  data() {
    return {
      courses: []
    };
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    async getCourses() {
      const response = await CoursesService.fetchCourses();
      this.courses = response.data;
    }
  }
};
</script>
