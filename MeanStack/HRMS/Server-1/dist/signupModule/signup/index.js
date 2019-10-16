'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _signup = require('./signup.Router');

Object.keys(_signup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signup[key];
    }
  });
});
//# sourceMappingURL=index.js.map