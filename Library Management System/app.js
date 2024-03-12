const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const books = require("./routes/BookRoute.js");
const Books = require("./models/BookModel.js");
const users = require("./routes/UserRoute.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});
app.get("/login", function (req, res, next) {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/Home", function (req, res, next) {
  res.sendFile(path.join(__dirname, "public", "Home.html"));
});



app.use("/book", books);

app.use("/user", users);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/LibraryManagementSystem");
  console.log("Successfully connected to the database");
}

main().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
