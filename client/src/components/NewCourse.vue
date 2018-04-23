<template>
  <div class="course">
    <h1>Add Course</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div class="addcourse_images">
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_course_btn" @click="addCourse">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import CoursesService from "@/services/CoursesService";
export default {
  name: "NewCourse",
  data() {
    return {
      title: "",
      description: "",
      videos: [],
      images: []
    };
  },
  methods: {
    async addCourse() {
      await CoursesService.addCourse({
        title: this.title,
        description: this.description,

      });
      this.$router.push({ name: "Course" });
    }
  }
};
</script>
<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_course_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
