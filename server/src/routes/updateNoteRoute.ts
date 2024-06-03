import { UserRequest } from '../middlewares/checkAuth';
import NoteModel from '../models/Note';
import { Request, Response } from 'express';

export default async (req: UserRequest, res: Response) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const note = await NoteModel.findById(id);
  if (!note) {
    res.status(400).send('No Deck of This Id Exists');
  } else {
    note.title = title;
    note.body = body;
    note.dateUpdated = new Date();

    const updatedNote = await note.save();
    res.json(updatedNote);
  }
};
