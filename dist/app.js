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

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index'],
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
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
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
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUF5Q0Usc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQXRDZkEsTUFzQ2UsR0F0Q047QUFDUEMsYUFBTyxDQUNMLGFBREssQ0FEQTtBQUlQQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFdBSHBCO0FBSU4sa0NBQTBCLE9BSnBCO0FBS04saUNBQXlCO0FBTG5CLE9BSkQ7QUFXUEMsY0FBUTtBQUNOLGlCQUFTLFNBREg7QUFFTix5QkFBaUIsU0FGWDtBQUdOLHVCQUFlLE9BSFQ7QUFJTiwyQkFBbUIsU0FKYjtBQUtOLG9CQUFZLFFBTE47QUFNTixnQkFBUSxDQUNOO0FBQ0UsOEJBQW9CLCtCQUR0QjtBQUVFLHNCQUFZLDhCQUZkO0FBR0Usc0JBQVksYUFIZDtBQUlFLGtCQUFRO0FBSlYsU0FETSxFQU9OO0FBQ0UsOEJBQW9CLDZCQUR0QjtBQUVFLHNCQUFZLDRCQUZkO0FBR0Usc0JBQVksY0FIZDtBQUlFLGtCQUFRO0FBSlYsU0FQTTtBQU5GO0FBWEQsS0FzQ007QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtjLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBeEUwQixlQUFLaUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBcImJhY2tncm91bmRUZXh0U3R5bGVcIjogXCJsaWdodFwiLFxyXG4gICAgICBcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTI5NmRiXCIsXHJcbiAgICAgIFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOiBcIuWMl+W3peWkp+a0u+WKqOaKpeWQjeW5s+WPsFwiLFxyXG4gICAgICBcIm5hdmlnYXRpb25CYXJUZXh0U3R5bGVcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICBcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGFiQmFyOiB7XHJcbiAgICAgIFwiY29sb3JcIjogXCIjMmMyYzJjXCIsXHJcbiAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiMxMjk2ZGJcIixcclxuICAgICAgXCJib3JkZXJTdHlsZVwiOiBcImJsYWNrXCIsXHJcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICBcInBvc2l0aW9uXCI6IFwiYm90dG9tXCIsXHJcbiAgICAgIFwibGlzdFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ltYWdlcy90b29sYmFyL2FjdGl2aXR5Mi5wbmdcIixcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL3Rvb2xiYXIvYWN0aXZpdHkucG5nXCIsXHJcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5kZXhcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIua0u+WKqFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCIvaW1hZ2VzL3Rvb2xiYXIvcGVyc29uMi5wbmdcIixcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCIvaW1hZ2VzL3Rvb2xiYXIvcGVyc29uLnBuZ1wiLFxyXG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL215aW5mb1wiLFxyXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwi5Liq5Lq6XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB0aGlzLnRlc3RBc3luYygpXHJcbiAgfVxyXG5cclxuICBzbGVlcCAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=