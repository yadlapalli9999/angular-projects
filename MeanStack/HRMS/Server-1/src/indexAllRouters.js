import express from 'express';
import { signRouter } from './signupModule/signup/signup.Router';

export const restRouter = express.Router();
restRouter.use('/signup', signRouter);
