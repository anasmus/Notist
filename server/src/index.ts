import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || '';

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use(router);

mongoose.connect(mongoURI).then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});
