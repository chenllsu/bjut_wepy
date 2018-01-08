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
      pages: ['pages/index', 'pages/Search', 'pages/sport'],
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
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsInRhYkJhciIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTJDRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBeENmQSxNQXdDZSxHQXhDTjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGNBRkssRUFHTCxhQUhLLENBREE7QUFNUEMsY0FBUTtBQUNOLCtCQUF1QixPQURqQjtBQUVOLHdDQUFnQyxTQUYxQjtBQUdOLGtDQUEwQixXQUhwQjtBQUlOLGtDQUEwQixPQUpwQjtBQUtOLGlDQUF5QjtBQUxuQixPQU5EO0FBYVBDLGNBQVE7QUFDTixpQkFBUyxTQURIO0FBRU4seUJBQWlCLFNBRlg7QUFHTix1QkFBZSxPQUhUO0FBSU4sMkJBQW1CLFNBSmI7QUFLTixvQkFBWSxRQUxOO0FBTU4sZ0JBQVEsQ0FDTjtBQUNFLDhCQUFvQiwrQkFEdEI7QUFFRSxzQkFBWSw4QkFGZDtBQUdFLHNCQUFZLGFBSGQ7QUFJRSxrQkFBUTtBQUpWLFNBRE0sRUFPTjtBQUNFLDhCQUFvQiw2QkFEdEI7QUFFRSxzQkFBWSw0QkFGZDtBQUdFLHNCQUFZLGNBSGQ7QUFJRSxrQkFBUTtBQUpWLFNBUE07QUFORjtBQWJELEtBd0NNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFTUMsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQU9XSyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtWLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLVSxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSCxlQUFLVixVQUFMLENBQWdCQyxRQUFoQixHQUEyQlksSUFBSVosUUFBL0I7QUFDQVEsZ0JBQU1BLEdBQUdJLElBQUlaLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQTFFMEIsZUFBS2EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL1NlYXJjaCcsXHJcbiAgICAgICdwYWdlcy9zcG9ydCdcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgXCJiYWNrZ3JvdW5kVGV4dFN0eWxlXCI6IFwibGlnaHRcIixcclxuICAgICAgXCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6IFwiIzEyOTZkYlwiLFxyXG4gICAgICBcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjogXCLljJflt6XlpKfmtLvliqjmiqXlkI3lubPlj7BcIixcclxuICAgICAgXCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6IFwid2hpdGVcIixcclxuICAgICAgXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBcImNvbG9yXCI6IFwiIzJjMmMyY1wiLFxyXG4gICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjMTI5NmRiXCIsXHJcbiAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxyXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgXCJwb3NpdGlvblwiOiBcImJvdHRvbVwiLFxyXG4gICAgICBcImxpc3RcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcIi9pbWFnZXMvdG9vbGJhci9hY3Rpdml0eTIucG5nXCIsXHJcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiL2ltYWdlcy90b29sYmFyL2FjdGl2aXR5LnBuZ1wiLFxyXG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZGV4XCIsXHJcbiAgICAgICAgICBcInRleHRcIjogXCLmtLvliqhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6IFwiL2ltYWdlcy90b29sYmFyL3BlcnNvbjIucG5nXCIsXHJcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiL2ltYWdlcy90b29sYmFyL3BlcnNvbi5wbmdcIixcclxuICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9teWluZm9cIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIuS4quS6ulwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19