import express from 'express';
import createNoteRoute from './routes/createNoteRoute';
import readNotesRoute from './routes/readNotesRoute';
import updateNoteRoute from './routes/updateNoteRoute';
import deleteNoteRoute from './routes/deleteNoteRoute';
import checkAuth from './middlewares/checkAuth';

const router = express.Router();

router.get('/notes', checkAuth, readNotesRoute);
router.post('/notes', checkAuth, createNoteRoute);
router.put('/notes/:id', checkAuth, updateNoteRoute);
router.delete('/notes/:id', checkAuth, deleteNoteRoute);

export default router;
