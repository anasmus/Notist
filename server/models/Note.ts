import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String,
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
