const Note = require("../models/notes.model");
const NoteCtrls = {};

NoteCtrls.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  const newNote = await new Note({ title, description });
  await newNote.save();
  res.send("newNote");
};
NoteCtrls.viewsNotes = async (req, res) => {
  const notes = await Note.find();
  res.send({ notes });
};
NoteCtrls.viewsNoteId = async (req,res)=>{
  const notes = await Note.findById(req.params.id)
  res.send(notes)
}
NoteCtrls.deleteNotes = async (req, res) => {
  await Note.findByIdAndDelete({_id:req.params.id});
  res.send("Delete note ");
};
NoteCtrls.updateNotes = async(req, res)=>{
  const {title, description} = req.body;
  await Note.findByIdAndUpdate(req.params.id, {title, description})
  res.send('notes updates') 
}
module.exports = NoteCtrls;
