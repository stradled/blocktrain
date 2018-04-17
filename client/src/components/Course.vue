<template>
  <div class="course">
    <h1>Single Course</h1>
    <p>This is a course, need to get the data passed in</p>
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
