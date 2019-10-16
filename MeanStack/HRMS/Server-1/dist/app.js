'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _indexAllRouters = require('./indexAllRouters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


var PORT = 3000;

//app.use();
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.use('/api', _indexAllRouters.restRouter);
app.get('/', function (req, res, next) {
    console.log('middleware of express');
    next();
});
_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect('mongodb://localhost/hrms', { useNewUrlParser: true });

app.listen(PORT, function (err) {
    if (err) {
        throw err;
    } else {
        console.log('Server running on port:' + PORT);
    }
});
//# sourceMappingURL=app.js.map