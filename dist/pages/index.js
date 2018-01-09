'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _search = require('./../components/index/search.js');

var _search2 = _interopRequireDefault(_search);

var _SideList = require('./../components/index/SideList.js');

var _SideList2 = _interopRequireDefault(_SideList);

var _swiper = require('./../components/index/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '北京工业大学'
    }, _this.$repeat = {}, _this.$props = { "search": { "xmlns:v-bind": "", "v-bind:OpenSideList.sync": "open" }, "SideList": { "v-bind:OpenSideList.sync": "open" } }, _this.$events = {}, _this.components = {
      search: _search2.default,
      SideList: _SideList2.default,
      swiper: _swiper2.default
    }, _this.data = {
      // 已经点击过的侧边栏item
      has_click_side_item: [1],
      show_search_back: false,
      activity_data: '',
      swiper: '',
      tag_select: 0,
      open: false,
      sport_tab: 1,
      // academy: app.globalData.academy,
      sport_aca_picker_index: 0
    }, _this.computed = {}, _this.methods = {
      reach_top: function reach_top() {
        console.log('test');
      }

      // events对象中所声明的函数为用于监听组件之间的通信与交互事件的事件处理函数
    }, _this.events = {
      'change_sidelist_button': function change_sidelist_button(open_mark) {
        _this.open = open_mark;
      },
      'close_side_list': function close_side_list(a) {
        console.log('close side list');
        _this.open = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('chenlong make this...');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaCIsIlNpZGVMaXN0Iiwic3dpcGVyIiwiZGF0YSIsImhhc19jbGlja19zaWRlX2l0ZW0iLCJzaG93X3NlYXJjaF9iYWNrIiwiYWN0aXZpdHlfZGF0YSIsInRhZ19zZWxlY3QiLCJvcGVuIiwic3BvcnRfdGFiIiwic3BvcnRfYWNhX3BpY2tlcl9pbmRleCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInJlYWNoX3RvcCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJvcGVuX21hcmsiLCJhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDRCQUEyQixNQUE5QyxFQUFWLEVBQWdFLFlBQVcsRUFBQyw0QkFBMkIsTUFBNUIsRUFBM0UsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsOEJBRFU7QUFFVkMsa0NBRlU7QUFHVkM7QUFIVSxLLFFBTVpDLEksR0FBTztBQUNIO0FBQ0FDLDJCQUFxQixDQUFDLENBQUQsQ0FGbEI7QUFHSEMsd0JBQWtCLEtBSGY7QUFJSEMscUJBQWUsRUFKWjtBQUtISixjQUFRLEVBTEw7QUFNSEssa0JBQVksQ0FOVDtBQU9IQyxZQUFNLEtBUEg7QUFRSEMsaUJBQVcsQ0FSUjtBQVNIO0FBQ0FDLDhCQUF3QjtBQVZyQixLLFFBYUxDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxpQkFBVyxxQkFBTTtBQUNmQyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDs7QUFHSDtBQU5VLEssUUFPVkMsTSxHQUFTO0FBQ1AsZ0NBQTBCLGdDQUFDQyxTQUFELEVBQWU7QUFDdkMsY0FBS1QsSUFBTCxHQUFZUyxTQUFaO0FBQ0QsT0FITTtBQUlQLHlCQUFtQix5QkFBQ0MsQ0FBRCxFQUFPO0FBQ3hCSixnQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsY0FBS1AsSUFBTCxHQUFZLEtBQVo7QUFDRDtBQVBNLEs7Ozs7OzZCQVVBO0FBQ1BNLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOzs7O0VBaEQ4QixlQUFLSSxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9zZWFyY2gnXHJcbmltcG9ydCBzaWRlbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L1NpZGVMaXN0J1xyXG5pbXBvcnQgc3dpcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvc3dpcGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljJfkuqzlt6XkuJrlpKflraYnXHJcbiAgfVxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWFyY2hcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOk9wZW5TaWRlTGlzdC5zeW5jXCI6XCJvcGVuXCJ9LFwiU2lkZUxpc3RcIjp7XCJ2LWJpbmQ6T3BlblNpZGVMaXN0LnN5bmNcIjpcIm9wZW5cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgc2VhcmNoOiBzZWFyY2gsXHJcbiAgICBTaWRlTGlzdDogc2lkZWxpc3QsXHJcbiAgICBzd2lwZXI6IHN3aXBlclxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgICAgLy8g5bey57uP54K55Ye76L+H55qE5L6n6L655qCPaXRlbVxyXG4gICAgICBoYXNfY2xpY2tfc2lkZV9pdGVtOiBbMV0sXHJcbiAgICAgIHNob3dfc2VhcmNoX2JhY2s6IGZhbHNlLFxyXG4gICAgICBhY3Rpdml0eV9kYXRhOiAnJyxcclxuICAgICAgc3dpcGVyOiAnJyxcclxuICAgICAgdGFnX3NlbGVjdDogMCxcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgIHNwb3J0X3RhYjogMSxcclxuICAgICAgLy8gYWNhZGVteTogYXBwLmdsb2JhbERhdGEuYWNhZGVteSxcclxuICAgICAgc3BvcnRfYWNhX3BpY2tlcl9pbmRleDogMFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHJlYWNoX3RvcDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudHPlr7nosaHkuK3miYDlo7DmmI7nmoTlh73mlbDkuLrnlKjkuo7nm5HlkKznu4Tku7bkuYvpl7TnmoTpgJrkv6HkuI7kuqTkupLkuovku7bnmoTkuovku7blpITnkIblh73mlbBcclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgJ2NoYW5nZV9zaWRlbGlzdF9idXR0b24nOiAob3Blbl9tYXJrKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gb3Blbl9tYXJrXHJcbiAgICAgIH0sXHJcbiAgICAgICdjbG9zZV9zaWRlX2xpc3QnOiAoYSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSBzaWRlIGxpc3QnKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hlbmxvbmcgbWFrZSB0aGlzLi4uJylcclxuICAgIH1cclxuICB9XHJcbiAgIl19