import { UserRequest } from '../middlewares/checkAuth';
import NoteModel from '../models/Note';
import { Request, Response } from 'express';

export default async (req: UserRequest, res: Response) => {
  const { id } = req.params;

  const note = await NoteModel.findByIdAndDelete(id);
  res.json(note);
};
