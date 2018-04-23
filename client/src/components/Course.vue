<template>
  <div class="course">
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <p> Number of videos : {{videos.length}}</p>
    <p> Number of images : {{images.length}}</p>
  </div>
</template>


<script>
import CoursesService from "@/services/CoursesService";
export default {
  name: "courses",
  data() {
    return {
      title: '',
      description: '',
      videos: [],
      images: []
    };
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    async getCourse () {
      const response = await CoursesService.getCourse({
        id: this.$route.params.id
      });
      this.title = response.data.title
      this.description = response.data.description
      this.videos = response.data.videos
      this.images = response.data.images
    }
  }
};
</script>
