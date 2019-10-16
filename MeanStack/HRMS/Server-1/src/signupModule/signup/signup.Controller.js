import SignUp from './signup.Model';
//  export async function signUp(req, res) {
//      try {
//          const signup = await SignUp.create(req.body);
//          return res.status(201).json(signup);
//      } catch (e) {
//          return res.status(500).json(e);
//      }
//  }

import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import signUpService from '../signup/signup.service';
import Signup from '../signup/signup.Model';
export default{
    async create(req,res){
        try {
            const { value, error } = signUpService.validateCreateSchema(req.body);
            if (error && error.details) {
              return res.status(BAD_REQUEST).json(error);
            }
            const signup = await Signup.create(value);
            return res.json(signup);
          } catch (err) {
            return res.status(INTERNAL_SERVER_ERROR).json(err);
          }
    }
}