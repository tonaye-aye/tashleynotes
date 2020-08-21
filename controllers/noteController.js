// import model
const Note = require("../models/note");

// GET all blogs page
const note_index = (req, res) => {
  Note.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.render("notes/index", {
        title: "All Notes",
        notes: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET Blog page
const note_details = (req, res) => {
  const id = req.params.id;
  Note.findById(id)
    .then((data) => {
      res.render("notes/details", { note: data, title: "Note Details" });
    })
    .catch((err) => {
      res.redirect("/404");

      // Alternate way
      // res.render("404", { title: "Not found!" });
    });
};

// GET create a new blog page
const note_create_get = (req, res) => {
  res.render("notes/create", {
    title: "Write a new note",
  });
};

// POST a new blog article
const note_create_post = (req, res) => {
  const note = new Note(req.body);
  note
    .save()
    .then((data) => {
      res.redirect("/notes");
    })
    .catch((err) => {
      console.log(err);
    });
};

// DELETE blog page
const note_delete = (req, res) => {
  const id = req.params.id;

  Note.findByIdAndDelete(id)
    .then((data) => {
      res.json({ redirect: "/notes" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  note_index,
  note_details,
  note_create_get,
  note_create_post,
  note_delete,
};
