'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _signup = require('./signupModule/signup/signup.Router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use('/signup', _signup.signRouter);
//# sourceMappingURL=indexAllRouters.js.map