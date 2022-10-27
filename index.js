const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const category = require("./data/category.json");
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Learn Hub API");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/categories", (req, res) => {
  res.send(category);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "00") {
    res.send(courses);
  } else {
    const course = courses.filter((c) => c.category_id === id);
    res.send(course);
  }
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c._id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
