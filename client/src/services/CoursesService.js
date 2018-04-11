import Api from '@/services/Api'

export default {
  fetchCourses () {
    return Api().get('courses')
  }
}
