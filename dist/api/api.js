'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var host = 'https://www.i-exshare.cn';
var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _wepy2.default.showToast({
                            title: '加载中',
                            icon: 'loading'
                        });
                        console.log(url);
                        _context.next = 4;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: params.data || {},
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 4:
                        res = _context.sent;

                        _wepy2.default.hideToast();
                        return _context.abrupt('return', res);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

//index
var GetUerKey = function GetUerKey(params) {
    return wxRequest(params, host + '/api/get_user_key');
};

module.exports = {
    GetUerKey: GetUerKey
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJob3N0Iiwid3hSZXF1ZXN0IiwicGFyYW1zIiwidXJsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVyIiwicmVzIiwiaGlkZVRvYXN0IiwiR2V0VWVyS2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLDBCQUFiO0FBQ0EsSUFBTUM7QUFBQSx1RUFBWTtBQUFBLFlBQU9DLE1BQVAsdUVBQWdCLEVBQWhCO0FBQUEsWUFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLHVDQUFLQyxTQUFMLENBQWU7QUFDYkMsbUNBQU8sS0FETTtBQUViQyxrQ0FBTTtBQUZPLHlCQUFmO0FBSUFDLGdDQUFRQyxHQUFSLENBQVlMLEdBQVo7QUFMYztBQUFBLCtCQU1FLGVBQUtNLE9BQUwsQ0FBYTtBQUN6Qk4saUNBQUtBLEdBRG9CO0FBRXpCTyxvQ0FBUVIsT0FBT1EsTUFBUCxJQUFpQixLQUZBO0FBR3pCQyxrQ0FBTVQsT0FBT1MsSUFBUCxJQUFlLEVBSEk7QUFJekJDLG9DQUFRLEVBQUMsZ0JBQWdCLGtCQUFqQjtBQUppQix5QkFBYixDQU5GOztBQUFBO0FBTVZDLDJCQU5VOztBQVlkLHVDQUFLQyxTQUFMO0FBWmMseURBYVBELEdBYk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWdCQTtBQUNBLElBQU1FLFlBQVksU0FBWkEsU0FBWSxDQUFDYixNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQkYsT0FBTyxtQkFBekIsQ0FBWjtBQUFBLENBQWxCOztBQUVBZ0IsT0FBT0MsT0FBUCxHQUFpQjtBQUNiRjtBQURhLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuY29uc3QgaG9zdCA9ICdodHRwczovL3d3dy5pLWV4c2hhcmUuY24nO1xyXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyAocGFyYW1zID0ge30sIHVybCkgPT4ge1xyXG4gICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgIGljb246ICdsb2FkaW5nJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8ICdHRVQnLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhIHx8IHt9LFxyXG4gICAgICAgIGhlYWRlcjogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxyXG4gICAgfSk7XHJcbiAgICB3ZXB5LmhpZGVUb2FzdCgpO1xyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbi8vaW5kZXhcclxuY29uc3QgR2V0VWVyS2V5ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgaG9zdCArICcvYXBpL2dldF91c2VyX2tleScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBHZXRVZXJLZXlcclxufTtcclxuIl19