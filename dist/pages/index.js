'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
    }, _this.components = {}, _this.data = {
      // 已经点击过的侧边栏item
      has_click_side_item: [1],
      show_search_back: false,
      activity_data: '',
      swiper: '',
      tag_select: 0,
      open: false,
      sport_tab: 1,
      academy: app.globalData.academy,
      sport_aca_picker_index: 0
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaGFzX2NsaWNrX3NpZGVfaXRlbSIsInNob3dfc2VhcmNoX2JhY2siLCJhY3Rpdml0eV9kYXRhIiwic3dpcGVyIiwidGFnX3NlbGVjdCIsIm9wZW4iLCJzcG9ydF90YWIiLCJhY2FkZW15IiwiYXBwIiwiZ2xvYmFsRGF0YSIsInNwb3J0X2FjYV9waWNrZXJfaW5kZXgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0w7QUFDQUMsMkJBQXFCLENBQUMsQ0FBRCxDQUZoQjtBQUdMQyx3QkFBa0IsS0FIYjtBQUlMQyxxQkFBZSxFQUpWO0FBS0xDLGNBQVEsRUFMSDtBQU1MQyxrQkFBWSxDQU5QO0FBT0xDLFlBQU0sS0FQRDtBQVFMQyxpQkFBVyxDQVJOO0FBU0xDLGVBQVNDLElBQUlDLFVBQUosQ0FBZUYsT0FUbkI7QUFVTEcsOEJBQXdCO0FBVm5CLEssUUFhUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7OzZCQUlBO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEOzs7O0VBaENnQyxlQUFLQyxJOztrQkFBbkJyQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WMl+S6rOW3peS4muWkp+WtpidcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICAvLyDlt7Lnu4/ngrnlh7vov4fnmoTkvqfovrnmoI9pdGVtXG4gICAgaGFzX2NsaWNrX3NpZGVfaXRlbTogWzFdLFxuICAgIHNob3dfc2VhcmNoX2JhY2s6IGZhbHNlLFxuICAgIGFjdGl2aXR5X2RhdGE6ICcnLFxuICAgIHN3aXBlcjogJycsXG4gICAgdGFnX3NlbGVjdDogMCxcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBzcG9ydF90YWI6IDEsXG4gICAgYWNhZGVteTogYXBwLmdsb2JhbERhdGEuYWNhZGVteSxcbiAgICBzcG9ydF9hY2FfcGlja2VyX2luZGV4OiAwLFxuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG4gIH1cblxuICBtZXRob2RzID0ge1xuICB9XG5cbiAgZXZlbnRzID0ge1xuXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2NoZW5sb25nIG1ha2UgdGhpcy4uLicpO1xuICB9XG59XG4iXX0=