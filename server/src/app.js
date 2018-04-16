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
  Course.find({}, "title description", function(error, courses) {
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
  var title = req.body.title;
  var description = req.body.description;
  var new_course = new Course({
    title: title,
    description: description
  });

  new_course.save(function(error) {
    if (error) {
      console.log(error);
    }
    calendres.send({
      success: true,
      message: "Course saved successfully!"
    });
  });
});

app.listen(process.env.PORT || 3000);
