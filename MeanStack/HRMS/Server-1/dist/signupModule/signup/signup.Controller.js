'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _signup = require('./signup.Model');

var _signup2 = _interopRequireDefault(_signup);

var _httpStatusCodes = require('http-status-codes');

var _signup3 = require('../signup/signup.service');

var _signup4 = _interopRequireDefault(_signup3);

var _signup5 = require('../signup/signup.Model');

var _signup6 = _interopRequireDefault(_signup5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//  export async function signUp(req, res) {
//      try {
//          const signup = await SignUp.create(req.body);
//          return res.status(201).json(signup);
//      } catch (e) {
//          return res.status(500).json(e);
//      }
//  }

exports.default = {
  create: function create(req, res) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _signUpService$valida, value, error, signup;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _signUpService$valida = _signup4.default.validateCreateSchema(req.body), value = _signUpService$valida.value, error = _signUpService$valida.error;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context.next = 6;
              return _signup6.default.create(value);

            case 6:
              signup = _context.sent;
              return _context.abrupt('return', res.json(signup));

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 10]]);
    }))();
  }
};
//# sourceMappingURL=signup.Controller.js.map