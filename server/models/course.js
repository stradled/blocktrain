var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: String,
  description: String,
  hidden: Boolean,
  images: [{
    url: String,
    alt: String
  }],
  videos: [{
    title: String,
    description: String,
    streamingUrl: String,
    downloadUrl: String,
    lengthInSeconds: Number,
  }]
});

var Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
