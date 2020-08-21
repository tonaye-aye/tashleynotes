const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create model for data, name is singular of collection name (notes)
// then pass through schema as second arguement
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
