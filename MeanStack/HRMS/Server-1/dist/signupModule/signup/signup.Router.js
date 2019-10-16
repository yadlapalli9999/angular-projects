'use strict';

Object.defineProperty(exports, "__esModule", {
          value: true
});
exports.signRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _signup = require('./signup.Controller');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {Router} from 'express';
// import * as signController from './signup.Controller';
// const routes = new Router();
// routes.post('/signup', signController.signUp);
// export default routes;

var signRouter = exports.signRouter = _express2.default.Router();

signRouter.route('/').post(_signup2.default.create);
//# sourceMappingURL=signup.Router.js.map