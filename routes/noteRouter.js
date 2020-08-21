const express = require("express");
const noteController = require("../controllers/noteController");

// router
const router = express.Router();

// note routes
router.get("/", noteController.note_index);
router.post("/", noteController.note_create_post);
router.get("/create", noteController.note_create_get);
router.get("/:id", noteController.note_details);
router.delete("/:id", noteController.note_delete);

module.exports = router;
