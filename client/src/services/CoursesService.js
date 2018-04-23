import Api from '@/services/Api'

export default {
  fetchCourses () {
    return Api().get('courses')
  },
  addCourse (params) {
    return Api().course('courses', params)
  },
  getCourse (params) {
    return Api().get('course/' + params.id)
  },
}
