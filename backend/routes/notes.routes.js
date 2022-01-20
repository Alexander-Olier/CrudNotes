const { Router } = require("express");

const router = Router();

const {
  createNewNote,
  viewsNotes,
  deleteNotes,
  viewsNoteId,
  updateNotes,
} = require("../controllers/notes.controller");
//ver lista
router.get("/note", viewsNotes);
//ver uno en la lista
router.get("/note/noteOne/:id", viewsNoteId);
//crear una nota
router.post("/note/add", createNewNote);
//actualizar nota
router.put("/note/update/:id", updateNotes);
//eliminar nota
router.delete("/note/delete/:id", deleteNotes);

module.exports = router;
