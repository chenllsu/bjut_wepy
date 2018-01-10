'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this2 = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this2.config = {
      pages: ['pages/index', 'pages/search', 'pages/sport'],
      window: {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#1296db",
        "navigationBarTitleText": "北工大活动报名平台",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": true
      },
      tabBar: {
        "color": "#2c2c2c",
        "selectedColor": "#1296db",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "position": "bottom",
        "list": [{
          "selectedIconPath": "/images/toolbar/activity2.png",
          "iconPath": "/images/toolbar/activity.png",
          "pagePath": "pages/index",
          "text": "活动"
        }, {
          "selectedIconPath": "/images/toolbar/person2.png",
          "iconPath": "/images/toolbar/person.png",
          "pagePath": "pages/myinfo",
          "text": "个人"
        }]
      }
    };
    _this2.globalData = {
      userInfo: null
    };

    _this2.use('requestfix');
    return _this2;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _wepy2.default.setStorageSync('SYSTEM_INFO', 'systemInfo');
                _this = this;

                console.log('this is onLaunch...');
                _context.next = 5;
                return _wepy2.default.login({
                  success: function success(res) {
                    console.log(res.code);
                    _this.checkFristLogin();
                    this.code = res.code;
                  }
                });

              case 5:
                _context.next = 7;
                return _wepy2.default.getUserInfo({
                  success: function success(res) {
                    console.log(res.userInfo);
                    this.userInfo = res.userInfo;
                  }
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
    // 检查是否是首次登陆

  }, {
    key: 'checkFristLogin',
    value: function checkFristLogin() {
      console.log('this is checkFristLogin...');
      var FristLoginMark = _wepy2.default.getStorageSync('FristLoginMark');
      console.log(FristLoginMark);
      if (FristLoginMark) {
        console.log('不是第一次登陆');
        this.useAuthSetting();
      } else {
        console.log('是第一次登陆');
        _wepy2.default.setStorage({
          key: 'FristLoginMark',
          data: true
        });
      }
    }

    // 验证用户授权

  }, {
    key: 'useAuthSetting',
    value: function useAuthSetting() {
      console.log('进行用户授权验证...');
      var _this = this;
      _wepy2.default.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo'] === false) {
            _wepy2.default.showModal({
              title: '授权信息',
              content: '该功能需要授权获取你的公开信息，请进行授权，点击取消返回首页',
              confirmText: '进行授权',
              success: function success(res) {
                if (res.confirm) {
                  // 打开用户设置页面
                  _wepy2.default.openSetting({
                    success: function success(res) {
                      console.log('this is openSetting res:', res);
                      // res.authSetting = {
                      //   "scope.userInfo": true,
                      //   "scope.werun": true
                      // }
                      console.log("第一次未授权");
                      // self.getUserKey();
                    }
                  });
                } else {
                  console.log("取消"); /////////////////////////////////////////////////////////////////////////////
                  _wepy2.default.navigateTo({
                    url: '/pages/index'
                  });
                }
              }
            });
          } // 已经通过了验证
          else {
              // self.getUserKey();
            }
        }
      });
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function testAsync() {
        return _ref2.apply(this, arguments);
      }

      return testAsync;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInNldFN0b3JhZ2VTeW5jIiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsImNoZWNrRnJpc3RMb2dpbiIsImdldFVzZXJJbmZvIiwiRnJpc3RMb2dpbk1hcmsiLCJnZXRTdG9yYWdlU3luYyIsInVzZUF1dGhTZXR0aW5nIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJvcGVuU2V0dGluZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUEyQ0Usc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxXQXhDZkEsTUF3Q2UsR0F4Q047QUFDUEMsYUFBTyxDQUNQLGFBRE8sRUFFUCxjQUZPLEVBR1AsYUFITyxDQURBO0FBTVBDLGNBQVE7QUFDTiwrQkFBdUIsT0FEakI7QUFFTix3Q0FBZ0MsU0FGMUI7QUFHTixrQ0FBMEIsV0FIcEI7QUFJTixrQ0FBMEIsT0FKcEI7QUFLTixpQ0FBeUI7QUFMbkIsT0FORDtBQWFQQyxjQUFRO0FBQ04saUJBQVMsU0FESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sdUJBQWUsT0FIVDtBQUlOLDJCQUFtQixTQUpiO0FBS04sb0JBQVksUUFMTjtBQU1OLGdCQUFRLENBQ1I7QUFDRSw4QkFBb0IsK0JBRHRCO0FBRUUsc0JBQVksOEJBRmQ7QUFHRSxzQkFBWSxhQUhkO0FBSUUsa0JBQVE7QUFKVixTQURRLEVBT1I7QUFDRSw4QkFB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J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICdwYWdlcy9zZWFyY2gnLFxyXG4gICAgJ3BhZ2VzL3Nwb3J0J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBcImJhY2tncm91bmRUZXh0U3R5bGVcIjogXCJsaWdodFwiLFxyXG4gICAgICBcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTI5NmRiXCIsXHJcbiAgICAgIFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOiBcIuWMl+W3peWkp+a0u+WKqOaKpeWQjeW5s+WPsFwiLFxyXG4gICAgICBcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICBcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjMmMyYzJjXCIsXHJcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMxMjk2ZGJcIixcclxuICAgICAgXCJib3JkZXJTdHlsZVwiOiBcImJsYWNrXCIsXHJcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICBcInBvc2l0aW9uXCI6IFwiYm90dG9tXCIsXHJcbiAgICAgIFwibGlzdFwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvaW1hZ2VzL3Rvb2xiYXIvYWN0aXZpdHkyLnBuZ1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL3Rvb2xiYXIvYWN0aXZpdHkucG5nXCIsXHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZGV4XCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5rS75YqoXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9pbWFnZXMvdG9vbGJhci9wZXJzb24yLnBuZ1wiLFxyXG4gICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL3Rvb2xiYXIvcGVyc29uLnBuZ1wiLFxyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9teWluZm9cIixcclxuICAgICAgICBcInRleHRcIjogXCLkuKrkurpcIlxyXG4gICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25MYXVuY2goKSB7XHJcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdTWVNURU1fSU5GTycsICdzeXN0ZW1JbmZvJyk7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBvbkxhdW5jaC4uLicpXHJcbiAgICBhd2FpdCB3ZXB5LmxvZ2luKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpXHJcbiAgICAgICAgX3RoaXMuY2hlY2tGcmlzdExvZ2luKClcclxuICAgICAgICB0aGlzLmNvZGUgPSByZXMuY29kZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgYXdhaXQgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy51c2VySW5mbylcclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vIOajgOafpeaYr+WQpuaYr+mmluasoeeZu+mZhlxyXG4gIGNoZWNrRnJpc3RMb2dpbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBjaGVja0ZyaXN0TG9naW4uLi4nKVxyXG4gICAgdmFyIEZyaXN0TG9naW5NYXJrID0gd2VweS5nZXRTdG9yYWdlU3luYygnRnJpc3RMb2dpbk1hcmsnKVxyXG4gICAgY29uc29sZS5sb2coRnJpc3RMb2dpbk1hcmspXHJcbiAgICBpZiAoRnJpc3RMb2dpbk1hcmspIHtcclxuICAgICAgY29uc29sZS5sb2coJ+S4jeaYr+esrOS4gOasoeeZu+mZhicpXHJcbiAgICAgIHRoaXMudXNlQXV0aFNldHRpbmcoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ+aYr+esrOS4gOasoeeZu+mZhicpXHJcbiAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAnRnJpc3RMb2dpbk1hcmsnLFxyXG4gICAgICAgIGRhdGE6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6aqM6K+B55So5oi35o6I5p2DXHJcbiAgdXNlQXV0aFNldHRpbmcgKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+i/m+ihjOeUqOaIt+aOiOadg+mqjOivgS4uLicpXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICB3ZXB5LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddID09PSBmYWxzZSApIHtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmjojmnYPkv6Hmga8nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+l5Yqf6IO96ZyA6KaB5o6I5p2D6I635Y+W5L2g55qE5YWs5byA5L+h5oGv77yM6K+36L+b6KGM5o6I5p2D77yM54K55Ye75Y+W5raI6L+U5Zue6aaW6aG1JyxcclxuICAgICAgICAgICAgY29uZmlybVRleHQ6ICfov5vooYzmjojmnYMnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmiZPlvIDnlKjmiLforr7nva7pobXpnaJcclxuICAgICAgICAgICAgICAgIHdlcHkub3BlblNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgb3BlblNldHRpbmcgcmVzOicsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzLmF1dGhTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgXCJzY29wZS51c2VySW5mb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgXCJzY29wZS53ZXJ1blwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56ys5LiA5qyh5pyq5o6I5p2DXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuZ2V0VXNlcktleSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+W5raIXCIpOy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gLy8g5bey57uP6YCa6L+H5LqG6aqM6K+BXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvLyBzZWxmLmdldFVzZXJLZXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzbGVlcChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxufVxyXG4iXX0=