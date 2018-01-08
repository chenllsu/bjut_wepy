'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var search = function (_wepy$component) {
	_inherits(search, _wepy$component);

	function search() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, search);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			// chenlong: 'cjhe'
		}, _this.props = {
			// 点击侧边栏触发按钮标志
			OpenSideList: {
				type: Boolean,
				default: false
			}
		}, _this.computed = {}, _this.methods = {
			// 点击侧边栏按钮
			open_side_list: function open_side_list() {
				_this.OpenSideList = !_this.OpenSideList;
				_this.$emit('change_sidelist_button', _this.OpenSideList);
			},
			click_search: function click_search() {
				console.log('click click_search');
				_this.$root.$navigate({ url: 'search' });
			}
		}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(search, [{
		key: 'onLoad',
		value: function onLoad() {}
	}]);

	return search;
}(_wepy2.default.component);

exports.default = search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJkYXRhIiwicHJvcHMiLCJPcGVuU2lkZUxpc3QiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvcGVuX3NpZGVfbGlzdCIsIiRlbWl0IiwiY2xpY2tfc2VhcmNoIiwiY29uc29sZSIsImxvZyIsIiRyb290IiwiJG5hdmlnYXRlIiwidXJsIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLEksR0FBTztBQUNOO0FBRE0sRyxRQUdQQyxLLEdBQVE7QUFDUDtBQUNBQyxpQkFBYztBQUNiQyxVQUFNQyxPQURPO0FBRVBDLGFBQVM7QUFGRjtBQUZQLEcsUUFPUkMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1Q7QUFDQUMsbUJBQWdCLDBCQUFLO0FBQ3BCLFVBQUtOLFlBQUwsR0FBb0IsQ0FBQyxNQUFLQSxZQUExQjtBQUNBLFVBQUtPLEtBQUwsQ0FBVyx3QkFBWCxFQUFxQyxNQUFLUCxZQUExQztBQUNBLElBTFE7QUFNVFEsaUJBQWMsd0JBQU07QUFDbkJDLFlBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLFVBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixFQUFDQyxLQUFLLFFBQU4sRUFBckI7QUFDQTtBQVRRLEcsUUFZVkMsTSxHQUFTLEU7Ozs7OzJCQUlBLENBRVI7Ozs7RUFoQ2tDLGVBQUtDLFM7O2tCQUFwQmxCLE0iLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHRkYXRhID0ge1xyXG5cdFx0Ly8gY2hlbmxvbmc6ICdjamhlJ1xyXG5cdH1cclxuXHRwcm9wcyA9IHtcclxuXHRcdC8vIOeCueWHu+S+p+i+ueagj+inpuWPkeaMiemSruagh+W/l1xyXG5cdFx0T3BlblNpZGVMaXN0OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgXHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjb21wdXRlZCA9IHtcclxuXHR9XHJcblxyXG5cdG1ldGhvZHMgPSB7XHJcblx0XHQvLyDngrnlh7vkvqfovrnmoI/mjInpkq5cclxuXHRcdG9wZW5fc2lkZV9saXN0OiAoKSA9PntcclxuXHRcdFx0dGhpcy5PcGVuU2lkZUxpc3QgPSAhdGhpcy5PcGVuU2lkZUxpc3RcclxuXHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlX3NpZGVsaXN0X2J1dHRvbicsIHRoaXMuT3BlblNpZGVMaXN0KTtcclxuXHRcdH0sXHJcblx0XHRjbGlja19zZWFyY2g6ICgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2NsaWNrIGNsaWNrX3NlYXJjaCcpO1xyXG5cdFx0XHR0aGlzLiRyb290LiRuYXZpZ2F0ZSh7dXJsOiAnc2VhcmNoJ30pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXZlbnRzID0ge1xyXG5cclxuXHR9XHJcblxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdFxyXG5cdH1cclxufVxyXG4iXX0=