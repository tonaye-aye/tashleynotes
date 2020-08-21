const express = require("express");
//const morgan = require("morgan");
const mongoose = require("mongoose");

const noteRoutes = require("./routes/noteRouter");

//express app
const app = express();

//connect to mongo db
const db =
  "mongodb+srv://tony:gunners1@cluster0.r3zoz.mongodb.net/notes-backend?retryWrites=true&w=majority";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log("connected to database.\nI love Ashley\n<3");
    // listen for requests
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// static files & middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get("/", (req, res) => {
  res.redirect("/notes");
});

// blog routes
app.use("/notes", noteRoutes);

// 404 page
app.use((req, res) => {
  res.render("404", {
    title: "Not found!",
  });
});
