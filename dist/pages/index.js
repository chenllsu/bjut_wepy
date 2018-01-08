'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _search = require('./../components/index/search.js');

var _search2 = _interopRequireDefault(_search);

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
    }, _this.$repeat = {}, _this.$props = { "search": { "xmlns:v-bind": "", "v-bind:testprop.once": "123" } }, _this.$events = {}, _this.components = {
      search: _search2.default
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
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      'test': function test(name, $events) {
        console.log('this is test:', name);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // events对象中所声明的函数为用于监听组件之间的通信与交互事件的事件处理函数


  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('chenlong make this...');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlYXJjaCIsImRhdGEiLCJoYXNfY2xpY2tfc2lkZV9pdGVtIiwic2hvd19zZWFyY2hfYmFjayIsImFjdGl2aXR5X2RhdGEiLCJzd2lwZXIiLCJ0YWdfc2VsZWN0Iiwib3BlbiIsInNwb3J0X3RhYiIsInNwb3J0X2FjYV9waWNrZXJfaW5kZXgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixLQUExQyxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTDtBQUNBQywyQkFBcUIsQ0FBQyxDQUFELENBRmhCO0FBR0xDLHdCQUFrQixLQUhiO0FBSUxDLHFCQUFlLEVBSlY7QUFLTEMsY0FBUSxFQUxIO0FBTUxDLGtCQUFZLENBTlA7QUFPTEMsWUFBTSxLQVBEO0FBUUxDLGlCQUFXLENBUk47QUFTTDtBQUNBQyw4QkFBd0I7QUFWbkIsSyxRQWFQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVM7QUFDUCxjQUFRLGNBQUNDLElBQUQsRUFBT2YsT0FBUCxFQUFtQjtBQUN6QmdCLGdCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkYsSUFBN0I7QUFDRDtBQUhNLEs7O0FBRFQ7Ozs7OzZCQU9TO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOzs7O0VBdENnQyxlQUFLQyxJOztrQkFBbkJ2QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L3NlYXJjaCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YyX5Lqs5bel5Lia5aSn5a2mJ1xuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWFyY2hcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRlc3Rwcm9wLm9uY2VcIjpcIjEyM1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc2VhcmNoOiBzZWFyY2hcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgLy8g5bey57uP54K55Ye76L+H55qE5L6n6L655qCPaXRlbVxuICAgIGhhc19jbGlja19zaWRlX2l0ZW06IFsxXSxcbiAgICBzaG93X3NlYXJjaF9iYWNrOiBmYWxzZSxcbiAgICBhY3Rpdml0eV9kYXRhOiAnJyxcbiAgICBzd2lwZXI6ICcnLFxuICAgIHRhZ19zZWxlY3Q6IDAsXG4gICAgb3BlbjogZmFsc2UsXG4gICAgc3BvcnRfdGFiOiAxLFxuICAgIC8vIGFjYWRlbXk6IGFwcC5nbG9iYWxEYXRhLmFjYWRlbXksXG4gICAgc3BvcnRfYWNhX3BpY2tlcl9pbmRleDogMCxcbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgfVxuICAvLyBldmVudHPlr7nosaHkuK3miYDlo7DmmI7nmoTlh73mlbDkuLrnlKjkuo7nm5HlkKznu4Tku7bkuYvpl7TnmoTpgJrkv6HkuI7kuqTkupLkuovku7bnmoTkuovku7blpITnkIblh73mlbBcbiAgZXZlbnRzID0ge1xuICAgICd0ZXN0JzogKG5hbWUsICRldmVudHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRlc3Q6JywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGVubG9uZyBtYWtlIHRoaXMuLi4nKTtcbiAgfVxufVxuIl19