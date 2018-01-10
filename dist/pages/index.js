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
        console.log(e.detail.scrollTop);
        if (e.detail.scrollTop > 10) {
          console.log('hahah');
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
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaCIsIlNpZGVMaXN0Iiwic3dpcGVyIiwiZGF0YSIsImhhc19jbGlja19zaWRlX2l0ZW0iLCJzaG93X3NlYXJjaF9iYWNrIiwiYWN0aXZpdHlfZGF0YSIsInRhZ19zZWxlY3QiLCJvcGVuIiwic3BvcnRfdGFiIiwic3BvcnRfYWNhX3BpY2tlcl9pbmRleCIsImNvbXB1dGVkIiwibWV0aG9kcyIsInJlYWNoX3RvcCIsIiRhcHBseSIsImJpbmRzY3JvbGwiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInNjcm9sbFRvcCIsImV2ZW50cyIsIm9wZW5fbWFyayIsImFwcGx5IiwiYSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiw0QkFBMkIsTUFBOUMsRUFBcUQsOEJBQTZCLGtCQUFsRixFQUFWLEVBQWdILFlBQVcsRUFBQyw0QkFBMkIsTUFBNUIsRUFBM0gsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkMsOEJBRFU7QUFFVkMsa0NBRlU7QUFHVkM7QUFIVSxLLFFBTVpDLEksR0FBTztBQUNIO0FBQ0FDLDJCQUFxQixDQUFDLENBQUQsQ0FGbEI7QUFHSEMsd0JBQWtCLEtBSGY7QUFJSEMscUJBQWUsRUFKWjtBQUtISixjQUFRLEVBTEw7QUFNSEssa0JBQVksQ0FOVDtBQU9IQyxZQUFNLEtBUEg7QUFRSEMsaUJBQVcsQ0FSUjtBQVNIO0FBQ0FDLDhCQUF3QjtBQVZyQixLLFFBYUxDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSO0FBQ0FDLGlCQUFXLHFCQUFNO0FBQ2YsY0FBS1IsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxjQUFLUyxNQUFMO0FBQ0QsT0FMTztBQU1SO0FBQ0FDLGtCQUFZLG9CQUFVQyxDQUFWLEVBQWE7QUFDdkJDLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQUYsQ0FBU0MsU0FBckI7QUFDQSxZQUFJSixFQUFFRyxNQUFGLENBQVNDLFNBQVQsR0FBcUIsRUFBekIsRUFBNkI7QUFDM0JILGtCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGVBQUtiLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsZUFBS1MsTUFBTDtBQUNELFNBSkQsTUFJTztBQUNMLGVBQUtULGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0EsZUFBS1MsTUFBTDtBQUNEO0FBQ0Y7O0FBR0g7QUFwQlUsSyxRQXFCVk8sTSxHQUFTO0FBQ1AsZ0NBQTBCLGdDQUFDQyxTQUFELEVBQWU7QUFDdkMsY0FBS2QsSUFBTCxHQUFZYyxTQUFaO0FBQ0EsY0FBS0MsS0FBTDtBQUNELE9BSk07QUFLUCx5QkFBbUIseUJBQUNDLENBQUQsRUFBTztBQUN4QlAsZ0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLGNBQUtWLElBQUwsR0FBWSxLQUFaO0FBQ0Q7QUFSTSxLOzs7Ozs2QkFXQTtBQUNQUyxjQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDRDs7OztFQS9EOEIsZUFBS08sSTs7a0JBQW5CaEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvc2VhcmNoJ1xyXG5pbXBvcnQgc2lkZWxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9TaWRlTGlzdCdcclxuaW1wb3J0IHN3aXBlciBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L3N3aXBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YyX5Lqs5bel5Lia5aSn5a2mJ1xyXG4gIH1cclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2VhcmNoXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpPcGVuU2lkZUxpc3Quc3luY1wiOlwib3BlblwiLFwidi1iaW5kOlNob3dTZWFyY2hCYWNrLnN5bmNcIjpcInNob3dfc2VhcmNoX2JhY2tcIn0sXCJTaWRlTGlzdFwiOntcInYtYmluZDpPcGVuU2lkZUxpc3Quc3luY1wiOlwib3BlblwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBzZWFyY2g6IHNlYXJjaCxcclxuICAgIFNpZGVMaXN0OiBzaWRlbGlzdCxcclxuICAgIHN3aXBlcjogc3dpcGVyXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgICAvLyDlt7Lnu4/ngrnlh7vov4fnmoTkvqfovrnmoI9pdGVtXHJcbiAgICAgIGhhc19jbGlja19zaWRlX2l0ZW06IFsxXSxcclxuICAgICAgc2hvd19zZWFyY2hfYmFjazogZmFsc2UsXHJcbiAgICAgIGFjdGl2aXR5X2RhdGE6ICcnLFxyXG4gICAgICBzd2lwZXI6ICcnLFxyXG4gICAgICB0YWdfc2VsZWN0OiAwLFxyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgc3BvcnRfdGFiOiAxLFxyXG4gICAgICAvLyBhY2FkZW15OiBhcHAuZ2xvYmFsRGF0YS5hY2FkZW15LFxyXG4gICAgICBzcG9ydF9hY2FfcGlja2VyX2luZGV4OiAwXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5Yiw6L6+6aG26YOo5pe255qE55u45bqU5Ye95pWwXHJcbiAgICAgIHJlYWNoX3RvcDogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd19zZWFyY2hfYmFjayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDnm5HlkKzlsY/luZXmu5rliqhcclxuICAgICAgYmluZHNjcm9sbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5zY3JvbGxUb3ApXHJcbiAgICAgICAgaWYgKGUuZGV0YWlsLnNjcm9sbFRvcCA+IDEwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnaGFoYWgnKVxyXG4gICAgICAgICAgdGhpcy5zaG93X3NlYXJjaF9iYWNrID0gdHJ1ZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dfc2VhcmNoX2JhY2sgPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudHPlr7nosaHkuK3miYDlo7DmmI7nmoTlh73mlbDkuLrnlKjkuo7nm5HlkKznu4Tku7bkuYvpl7TnmoTpgJrkv6HkuI7kuqTkupLkuovku7bnmoTkuovku7blpITnkIblh73mlbBcclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgJ2NoYW5nZV9zaWRlbGlzdF9idXR0b24nOiAob3Blbl9tYXJrKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gb3Blbl9tYXJrXHJcbiAgICAgICAgdGhpcy5hcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgICdjbG9zZV9zaWRlX2xpc3QnOiAoYSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSBzaWRlIGxpc3QnKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2hlbmxvbmcgbWFrZSB0aGlzLi4uJylcclxuICAgIH1cclxuICB9XHJcbiAgIl19