import { Request, Response, NextFunction } from 'express';
import firebase from '../configs/firebase';

export interface User {
  uid: String;
  email: String;
  photoURL: String;
}

export interface UserRequest extends Request {
  user?: User;
}

const checkAuth = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization?.split('Bearer')[1];
  if (!authToken) {
    res.status(403).send('Unauthorized');
  }

  try {
    const decodedToken = await firebase.auth().verifyIdToken(authToken);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email || '',
      photoURL: decodedToken.picture || '',
    };
    next();
  } catch (error) {
    res.status(403).send('Unauthorized');
  }
};

export default checkAuth;
