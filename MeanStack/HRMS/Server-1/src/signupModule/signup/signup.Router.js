// import {Router} from 'express';
// import * as signController from './signup.Controller';
// const routes = new Router();
// routes.post('/signup', signController.signUp);
// export default routes;

import express from 'express';
import signController from './signup.Controller';
export const signRouter = express.Router();

signRouter.route('/')
          .post(signController.create)