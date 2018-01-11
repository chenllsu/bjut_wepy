'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./api/api.js');

var _api2 = _interopRequireDefault(_api);

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
                _this = this;

                console.log('this is onLaunch...');

              case 2:
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
        // 检查验证状态
        this.useAuthSetting();
      } else {
        console.log('是第一次登陆');
        _wepy2.default.setStorage({
          key: 'FristLoginMark',
          data: true
        });
        // 登陆并且获取用户信息
        this.LoginAndGetUserInfo();
      }
    }
  }, {
    key: 'LoginAndGetUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var temp_code, temp_userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('this is LoginAndGetUserInfo...');

                temp_code = null;
                temp_userInfo = null;
                _context2.next = 5;
                return _wepy2.default.login({
                  success: function success(res) {
                    console.log(res.code);
                    this.globalData.code = res.code;
                  }
                });

              case 5:
                _context2.next = 7;
                return _wepy2.default.getUserInfo({
                  success: function success(res) {
                    console.log(res.userInfo);
                    this.globalData.userInfo = res.userInfo;

                    _wepy2.default.setStorage({
                      key: 'userInfo',
                      data: res.userInfo
                    });
                  }
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function LoginAndGetUserInfo() {
        return _ref2.apply(this, arguments);
      }

      return LoginAndGetUserInfo;
    }()

    // 验证用户授权

  }, {
    key: 'useAuthSetting',
    value: function useAuthSetting() {
      console.log('进行用户授权验证...');
      var _this = this;
      _wepy2.default.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo'] === false) {
            console.log('未通过验证');
            _wepy2.default.showModal({
              title: '授权信息',
              content: '该功能需要授权获取你的公开信息，请进行授权，点击取消返回首页',
              confirmText: '进行授权',
              success: function success(res) {
                if (res.confirm) {
                  // 打开用户设置页面
                  _wepy2.default.openSetting({
                    success: function success(res) {
                      console.log('用户授权结果:', res.authSetting);
                    }
                  });
                } else {
                  console.log("取消");
                  // 调回首页
                  _wepy2.default.navigateTo({ url: 'search' });
                }
              }
            });
          } // 已经通过了验证
          else {
              // self.getUserKey();
              console.log('通过验证');
              _this.GetUserKey();
            }
        }
      });
    }

    // 获取后端 UserKey

  }, {
    key: 'GetUserKey',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('this is get user key', this.globalData);
                _this = this;

                new Promise(function (resolve, reject) {
                  _wepy2.default.login({
                    success: function success(res) {
                      console.log(res.code);
                      this.globalData.code = res.code;
                    }
                  });
                  _wepy2.default.getUserInfo({
                    success: function success(res) {
                      console.log(res.userInfo);
                      this.globalData.userInfo = res.userInfo;
                      resolve();
                      _wepy2.default.setStorage({
                        key: 'userInfo',
                        data: res.userInfo
                      });
                    }
                  });
                }).then(function (data) {
                  console.log('!!!!!!!!!!!!!!!!!', _this.globalData);
                  var code_userInfo = {
                    code: _this.globalData.code,
                    userInfo: _this.globalData.userInfo
                  };
                  var res = _api2.default.GetUerKey({ data: code_userInfo });
                  console.log('this is res', res);
                });

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function GetUserKey() {
        return _ref3.apply(this, arguments);
      }

      return GetUserKey;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIkZyaXN0TG9naW5NYXJrIiwiZ2V0U3RvcmFnZVN5bmMiLCJ1c2VBdXRoU2V0dGluZyIsInNldFN0b3JhZ2UiLCJrZXkiLCJkYXRhIiwiTG9naW5BbmRHZXRVc2VySW5mbyIsInRlbXBfY29kZSIsInRlbXBfdXNlckluZm8iLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJvcGVuU2V0dGluZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJHZXRVc2VyS2V5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwiY29kZV91c2VySW5mbyIsIkdldFVlcktleSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0Usc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxXQXhDZkEsTUF3Q2UsR0F4Q047QUFDUEMsYUFBTyxDQUNQLGFBRE8sRUFFUCxjQUZPLEVBR1AsYUFITyxDQURBO0FBTVBDLGNBQVE7QUFDTiwrQkFBdUIsT0FEakI7QUFFTix3Q0FBZ0MsU0FGMUI7QUFHTixrQ0FBMEIsV0FIcEI7QUFJTixrQ0FBMEIsT0FKcEI7QUFLTixpQ0FBeUI7QUFMbkIsT0FORDtBQWFQQyxjQUFRO0FBQ04saUJBQVMsU0FESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sdUJBQWUsT0FIVDtBQUlOLDJCQUFtQixTQUpiO0FBS04sb0JBQVksUUFMTjtBQU1OLGdCQUFRLENBQ1I7QUFDRSw4QkFBb0IsK0JBRHRCO0FBRUUsc0JBQVksOEJB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IlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGkvYXBpLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwe1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgJ3BhZ2VzL3NlYXJjaCcsXHJcbiAgICAncGFnZXMvc3BvcnQnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIFwiYmFja2dyb3VuZFRleHRTdHlsZVwiOiBcImxpZ2h0XCIsXHJcbiAgICAgIFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOiBcIiMxMjk2ZGJcIixcclxuICAgICAgXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6IFwi5YyX5bel5aSn5rS75Yqo5oql5ZCN5bmz5Y+wXCIsXHJcbiAgICAgIFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOiBcIndoaXRlXCIsXHJcbiAgICAgIFwiZW5hYmxlUHVsbERvd25SZWZyZXNoXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgXCJjb2xvclwiOiBcIiMyYzJjMmNcIixcclxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzEyOTZkYlwiLFxyXG4gICAgICBcImJvcmRlclN0eWxlXCI6IFwiYmxhY2tcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIFwicG9zaXRpb25cIjogXCJib3R0b21cIixcclxuICAgICAgXCJsaXN0XCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9pbWFnZXMvdG9vbGJhci9hY3Rpdml0eTIucG5nXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pbWFnZXMvdG9vbGJhci9hY3Rpdml0eS5wbmdcIixcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5kZXhcIixcclxuICAgICAgICBcInRleHRcIjogXCLmtLvliqhcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ltYWdlcy90b29sYmFyL3BlcnNvbjIucG5nXCIsXHJcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcIi9pbWFnZXMvdG9vbGJhci9wZXJzb24ucG5nXCIsXHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL215aW5mb1wiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuS4quS6ulwiXHJcbiAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxhdW5jaCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXNcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIG9uTGF1bmNoLi4uJylcclxuICB9XHJcblxyXG4gIC8vIOajgOafpeaYr+WQpuaYr+mmluasoeeZu+mZhlxyXG4gIGNoZWNrRnJpc3RMb2dpbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBjaGVja0ZyaXN0TG9naW4uLi4nKVxyXG4gICAgdmFyIEZyaXN0TG9naW5NYXJrID0gd2VweS5nZXRTdG9yYWdlU3luYygnRnJpc3RMb2dpbk1hcmsnKVxyXG4gICAgY29uc29sZS5sb2coRnJpc3RMb2dpbk1hcmspXHJcbiAgICBpZiAoRnJpc3RMb2dpbk1hcmspIHtcclxuICAgICAgY29uc29sZS5sb2coJ+S4jeaYr+esrOS4gOasoeeZu+mZhicpXHJcbiAgICAvLyDmo4Dmn6Xpqozor4HnirbmgIFcclxuICAgIHRoaXMudXNlQXV0aFNldHRpbmcoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygn5piv56ys5LiA5qyh55m76ZmGJylcclxuICAgIHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ0ZyaXN0TG9naW5NYXJrJyxcclxuICAgICAgZGF0YTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAgIC8vIOeZu+mZhuW5tuS4lOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICB0aGlzLkxvZ2luQW5kR2V0VXNlckluZm8oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgTG9naW5BbmRHZXRVc2VySW5mbygpe1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgTG9naW5BbmRHZXRVc2VySW5mby4uLicpO1xyXG5cclxuICAgIGxldCB0ZW1wX2NvZGUgPSBudWxsXHJcbiAgICBsZXQgdGVtcF91c2VySW5mbyA9IG51bGxcclxuICAgIGF3YWl0IHdlcHkubG9naW4oe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcclxuICAgICAgICB0aGlzLmdsb2JhbERhdGEuY29kZSA9IHJlcy5jb2RlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnVzZXJJbmZvKVxyXG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG5cclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAga2V5OiAndXNlckluZm8nLFxyXG4gICAgICAgICAgZGF0YTogcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8g6aqM6K+B55So5oi35o6I5p2DXHJcbiAgdXNlQXV0aFNldHRpbmcgKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+i/m+ihjOeUqOaIt+aOiOadg+mqjOivgS4uLicpXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICB3ZXB5LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddID09PSBmYWxzZSApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfmnKrpgJrov4fpqozor4EnKVxyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aOiOadg+S/oeaBrycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor6Xlip/og73pnIDopoHmjojmnYPojrflj5bkvaDnmoTlhazlvIDkv6Hmga/vvIzor7fov5vooYzmjojmnYPvvIzngrnlh7vlj5bmtojov5Tlm57pppbpobUnLFxyXG4gICAgICAgICAgICBjb25maXJtVGV4dDogJ+i/m+ihjOaOiOadgycsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIC8vIOaJk+W8gOeUqOaIt+iuvue9rumhtemdolxyXG4gICAgICAgICAgICAgICAgd2VweS5vcGVuU2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi35o6I5p2D57uT5p6cOicscmVzLmF1dGhTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPlua2iFwiKVxyXG4gICAgICAgICAgICAgICAgLy8g6LCD5Zue6aaW6aG1XHJcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDogJ3NlYXJjaCd9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IC8vIOW3sue7j+mAmui/h+S6humqjOivgVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgLy8gc2VsZi5nZXRVc2VyS2V5KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn6YCa6L+H6aqM6K+BJylcclxuICAgICAgICAgIF90aGlzLkdldFVzZXJLZXkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluWQjuerryBVc2VyS2V5XHJcbiAgYXN5bmMgR2V0VXNlcktleSAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBnZXQgdXNlciBrZXknLCB0aGlzLmdsb2JhbERhdGEpXHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICB3ZXB5LmxvZ2luKHtcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLmNvZGUgPSByZXMuY29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudXNlckluZm8pXHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAndXNlckluZm8nLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMudXNlckluZm9cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSkudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgY29uc29sZS5sb2coJyEhISEhISEhISEhISEhISEhJyxfdGhpcy5nbG9iYWxEYXRhKVxyXG4gICAgICB2YXIgY29kZV91c2VySW5mbyA9IHtcclxuICAgICAgICBjb2RlOiBfdGhpcy5nbG9iYWxEYXRhLmNvZGUsXHJcbiAgICAgICAgdXNlckluZm86IF90aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgICAgfTtcclxuICAgICAgbGV0IHJlcyA9IGFwaS5HZXRVZXJLZXkoe2RhdGE6IGNvZGVfdXNlckluZm99KVxyXG4gICAgICBjb25zb2xlLmxvZygndGhpcyBpcyByZXMnLCByZXMpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19