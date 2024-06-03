import { Request, Response } from 'express';
import NoteModel from '../models/Note';
import { UserRequest } from '../middlewares/checkAuth';

export default async (req: UserRequest, res: Response) => {
  const { uid } = req.user;
  const notes = await NoteModel.find().where('uid').equals(uid);
  res.json(notes);
};
