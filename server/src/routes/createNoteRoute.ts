import { Request, Response } from 'express';
import NoteModel from '../models/Note';
import { UserRequest } from '../middlewares/checkAuth';

export default async (req: UserRequest, res: Response) => {
  const { title, body } = req.body;
  const { uid } = req.user;
  const note = new NoteModel({
    uid,
    title,
    body,
  });
  const newNote = await note.save();
  res.json(newNote);
};
