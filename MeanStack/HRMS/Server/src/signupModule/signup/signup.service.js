
const Joi = require('joi');

const registerValidation = (data) =>{
    const schema = Joi.object().keys({
        userName: Joi.string().min(6).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string()
          .min(6)
          .required(),
      });
      return Joi.validate(data,schema)
}

const loginValidation = (data) =>{
    const schema = Joi.object().keys({
        email: Joi.string().email().min(6).required(),
        password: Joi.string()
          .min(6)
          .required(),
      });
      return Joi.validate(data,schema)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;