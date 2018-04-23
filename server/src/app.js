const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// const mongodb_conn_module = require("./mongodbConnectionModule");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blocktrain");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});

var Course = require("../models/course");

// Fetch all courses
app.get("/courses", (req, res) => {
  Course.find({}, "title description hidden images videos", function(error, courses) {
    if (error) {
      console.error(error);
    }
    res.send({
      courses: courses
    });
  }).sort({ _id: -1 });
});

// Add new course
app.post("/courses", (req, res) => {
  var db = req.db;
  debugger;
  var title = req.body.title;
  var description = req.body.description;
  var course_urlfriendly_display_name = req.body.course_urlfriendly_display_name;
  var hidden = req.body.hidden;
  var images = req.body.images;
  var videos = req.body.videos;

  var new_course = new Course({
    title: title,
    description: description,
    hidden: hidden,
    images: images,
    videos: videos
  });

  new_course.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Course saved successfully!"
    });
  });
});

// Get Single Course
app.get('/course/:id', (req, res) => {
	var db = req.db;
	Course.findById(req.params.id, 'title description hidden images videos', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 8081);
