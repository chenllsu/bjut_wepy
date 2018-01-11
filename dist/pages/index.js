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
    }, _this.$repeat = {}, _this.$props = { "search": { "xmlns:v-bind": "", "v-bind:OpenSideList.sync": "open", "v-bind:ShowSearchBack.sync": "show_search_back" }, "SideList": { "v-bind:OpenSideList.sync": "open" } }, _this.$events = {}, _this.components = {
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
      // 到达顶部时的相应函数
      reach_top: function reach_top() {
        _this.show_search_back = false;
        _this.$apply();
      },
      // 监听屏幕滚动
      bindscroll: function bindscroll(e) {
        if (e.detail.scrollTop > 10) {
          this.show_search_back = true;
          this.$apply();
        } else {
          this.show_search_back = false;
          this.$apply();
        }
      }

      // events对象中所声明的函数为用于监听组件之间的通信与交互事件的事件处理函数
    }, _this.events = {
      'change_sidelist_button': function change_sidelist_button(open_mark) {
        _this.open = open_mark;
        _this.apply();
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
      this.$parent.checkFristLogin();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaCIsIlNpZGVMaXN0Iiwic3dpcGVyIiwiZGF0YSIsImhhc19jbGlja19zaWRlX2l0ZW0iLCJzaG93X3NlYXJjaF9iYWNrIiwiYWN0aXZpdHlfZGF0YSIsInRhZ19zZWxlY3QiLCJvcGVuIiwic3BvcnRfdGFiIiwic3BvcnRfYWNhX3BpY2tlcl9pbmRleCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInJlYWNoX3RvcCIsIiRhcHBseSIsImJpbmRzY3JvbGwiLCJlIiwiZGV0YWlsIiwic2Nyb2xsVG9wIiwiZXZlbnRzIiwib3Blbl9tYXJrIiwiYXBwbHkiLCJhIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJjaGVja0ZyaXN0TG9naW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsNEJBQTJCLE1BQTlDLEVBQXFELDhCQUE2QixrQkFBbEYsRUFBVixFQUFnSCxZQUFXLEVBQUMsNEJBQTJCLE1BQTVCLEVBQTNILEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDhCQURVO0FBRVZDLGtDQUZVO0FBR1ZDO0FBSFUsSyxRQU1aQyxJLEdBQU87QUFDSDtBQUNBQywyQkFBcUIsQ0FBQyxDQUFELENBRmxCO0FBR0hDLHdCQUFrQixLQUhmO0FBSUhDLHFCQUFlLEVBSlo7QUFLSEosY0FBUSxFQUxMO0FBTUhLLGtCQUFZLENBTlQ7QUFPSEMsWUFBTSxLQVBIO0FBUUhDLGlCQUFXLENBUlI7QUFTSDtBQUNBQyw4QkFBd0I7QUFWckIsSyxRQWFMQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUjtBQUNBQyxpQkFBVyxxQkFBTTtBQUNmLGNBQUtSLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0EsY0FBS1MsTUFBTDtBQUNELE9BTE87QUFNUjtBQUNBQyxrQkFBWSxvQkFBVUMsQ0FBVixFQUFhO0FBQ3ZCLFlBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsU0FBVCxHQUFxQixFQUF6QixFQUE2QjtBQUMzQixlQUFLYixnQkFBTCxHQUF3QixJQUF4QjtBQUNBLGVBQUtTLE1BQUw7QUFDRCxTQUhELE1BR087QUFDTCxlQUFLVCxnQkFBTCxHQUF3QixLQUF4QjtBQUNBLGVBQUtTLE1BQUw7QUFDRDtBQUNGOztBQUdIO0FBbEJVLEssUUFtQlZLLE0sR0FBUztBQUNQLGdDQUEwQixnQ0FBQ0MsU0FBRCxFQUFlO0FBQ3ZDLGNBQUtaLElBQUwsR0FBWVksU0FBWjtBQUNBLGNBQUtDLEtBQUw7QUFDRCxPQUpNO0FBS1AseUJBQW1CLHlCQUFDQyxDQUFELEVBQU87QUFDeEJDLGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxjQUFLaEIsSUFBTCxHQUFZLEtBQVo7QUFDRDtBQVJNLEs7Ozs7OzZCQVdBO0FBQ1BlLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsZUFBYjtBQUNEOzs7O0VBOUQ4QixlQUFLQyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9zZWFyY2gnXHJcbmltcG9ydCBzaWRlbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L1NpZGVMaXN0J1xyXG5pbXBvcnQgc3dpcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvc3dpcGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljJfkuqzlt6XkuJrlpKflraYnXHJcbiAgfVxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWFyY2hcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOk9wZW5TaWRlTGlzdC5zeW5jXCI6XCJvcGVuXCIsXCJ2LWJpbmQ6U2hvd1NlYXJjaEJhY2suc3luY1wiOlwic2hvd19zZWFyY2hfYmFja1wifSxcIlNpZGVMaXN0XCI6e1widi1iaW5kOk9wZW5TaWRlTGlzdC5zeW5jXCI6XCJvcGVuXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHNlYXJjaDogc2VhcmNoLFxyXG4gICAgU2lkZUxpc3Q6IHNpZGVsaXN0LFxyXG4gICAgc3dpcGVyOiBzd2lwZXJcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICAgIC8vIOW3sue7j+eCueWHu+i/h+eahOS+p+i+ueagj2l0ZW1cclxuICAgICAgaGFzX2NsaWNrX3NpZGVfaXRlbTogWzFdLFxyXG4gICAgICBzaG93X3NlYXJjaF9iYWNrOiBmYWxzZSxcclxuICAgICAgYWN0aXZpdHlfZGF0YTogJycsXHJcbiAgICAgIHN3aXBlcjogJycsXHJcbiAgICAgIHRhZ19zZWxlY3Q6IDAsXHJcbiAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICBzcG9ydF90YWI6IDEsXHJcbiAgICAgIC8vIGFjYWRlbXk6IGFwcC5nbG9iYWxEYXRhLmFjYWRlbXksXHJcbiAgICAgIHNwb3J0X2FjYV9waWNrZXJfaW5kZXg6IDBcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDliLDovr7pobbpg6jml7bnmoTnm7jlupTlh73mlbBcclxuICAgICAgcmVhY2hfdG9wOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93X3NlYXJjaF9iYWNrID0gZmFsc2VcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOebkeWQrOWxj+W5lea7muWKqFxyXG4gICAgICBiaW5kc2Nyb2xsOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmRldGFpbC5zY3JvbGxUb3AgPiAxMCkge1xyXG4gICAgICAgICAgdGhpcy5zaG93X3NlYXJjaF9iYWNrID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dfc2VhcmNoX2JhY2sgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudHPlr7nosaHkuK3miYDlo7DmmI7nmoTlh73mlbDkuLrnlKjkuo7nm5HlkKznu4Tku7bkuYvpl7TnmoTpgJrkv6HkuI7kuqTkupLkuovku7bnmoTkuovku7blpITnkIblh73mlbBcclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgJ2NoYW5nZV9zaWRlbGlzdF9idXR0b24nOiAob3Blbl9tYXJrKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gb3Blbl9tYXJrXHJcbiAgICAgICAgdGhpcy5hcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgICdjbG9zZV9zaWRlX2xpc3QnOiAoYSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSBzaWRlIGxpc3QnKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hlbmxvbmcgbWFrZSB0aGlzLi4uJylcclxuICAgICAgdGhpcy4kcGFyZW50LmNoZWNrRnJpc3RMb2dpbigpXHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ==