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

var SideList = function (_wepy$component) {
	_inherits(SideList, _wepy$component);

	function SideList() {
		var _ref;

		var _temp, _this2, _ret;

		_classCallCheck(this, SideList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SideList.__proto__ || Object.getPrototypeOf(SideList)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {}, _this2.props = {
			// 点击侧边栏触发按钮标志
			OpenSideList: {
				type: Boolean,
				default: false
			}
		}, _this2.watch = {
			OpenSideList: function OpenSideList(newValue, oldValue) {
				console.log('num value: ' + oldValue + ' -> ' + newValue);
			}
		}, _this2.methods = {
			click_side_item: function click_side_item(key) {
				var _this = _this2;
				switch (key) {
					case '1':
						console.log('this is hahah');
						_this.OpenSideList = false;
						_this.$emit('close_side_list', 0);
						break;
					case '2':
						_this.$root.$navigate({ url: 'sport' });
						break;
				}
			}
		}, _temp), _possibleConstructorReturn(_this2, _ret);
	}

	_createClass(SideList, [{
		key: 'onLoad',
		value: function onLoad() {
			console.log('asdfhkalsdf');
		}
	}]);

	return SideList;
}(_wepy2.default.component);

exports.default = SideList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVMaXN0LmpzIl0sIm5hbWVzIjpbIlNpZGVMaXN0IiwiZGF0YSIsInByb3BzIiwiT3BlblNpZGVMaXN0IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJjbGlja19zaWRlX2l0ZW0iLCJrZXkiLCJfdGhpcyIsIiRlbWl0IiwiJHJvb3QiLCIkbmF2aWdhdGUiLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzJMQUNwQkMsSSxHQUFPLEUsU0FDUEMsSyxHQUFRO0FBQ1A7QUFDQUMsaUJBQWM7QUFDYkMsVUFBTUMsT0FETztBQUViQyxhQUFTO0FBRkk7QUFGUCxHLFNBT1JDLEssR0FBUTtBQUNQSixlQURPLHdCQUNPSyxRQURQLEVBQ2lCQyxRQURqQixFQUMyQjtBQUNqQ0MsWUFBUUMsR0FBUixpQkFBMEJGLFFBQTFCLFlBQXlDRCxRQUF6QztBQUNBO0FBSE0sRyxTQUtSSSxPLEdBQVU7QUFDVEMsb0JBQWlCLHlCQUFDQyxHQUFELEVBQVM7QUFDekIsUUFBSUMsY0FBSjtBQUNBLFlBQU9ELEdBQVA7QUFDQyxVQUFLLEdBQUw7QUFDQ0osY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQUksWUFBTVosWUFBTixHQUFxQixLQUFyQjtBQUNBWSxZQUFNQyxLQUFOLENBQVksaUJBQVosRUFBK0IsQ0FBL0I7QUFDQTtBQUNELFVBQUssR0FBTDtBQUNDRCxZQUFNRSxLQUFOLENBQVlDLFNBQVosQ0FBc0IsRUFBQ0MsS0FBSyxPQUFOLEVBQXRCO0FBQ0E7QUFSRjtBQVVBO0FBYlEsRzs7Ozs7MkJBZUY7QUFDUFQsV0FBUUMsR0FBUixDQUFZLGFBQVo7QUFDQTs7OztFQS9Cb0MsZUFBS1MsUzs7a0JBQXRCcEIsUSIsImZpbGUiOiJTaWRlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHRkYXRhID0ge31cclxuXHRwcm9wcyA9IHtcclxuXHRcdC8vIOeCueWHu+S+p+i+ueagj+inpuWPkeaMiemSruagh+W/l1xyXG5cdFx0T3BlblNpZGVMaXN0OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9XHJcblx0fVxyXG5cdHdhdGNoID0ge1xyXG5cdFx0T3BlblNpZGVMaXN0IChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coYG51bSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRtZXRob2RzID0ge1xyXG5cdFx0Y2xpY2tfc2lkZV9pdGVtOiAoa2V5KSA9PiB7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHN3aXRjaChrZXkpIHtcclxuXHRcdFx0XHRjYXNlICcxJzpcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzIGlzIGhhaGFoJyk7XHJcblx0XHRcdFx0XHRfdGhpcy5PcGVuU2lkZUxpc3QgPSBmYWxzZVxyXG5cdFx0XHRcdFx0X3RoaXMuJGVtaXQoJ2Nsb3NlX3NpZGVfbGlzdCcsIDApXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICcyJzpcclxuXHRcdFx0XHRcdF90aGlzLiRyb290LiRuYXZpZ2F0ZSh7dXJsOiAnc3BvcnQnfSlcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uTG9hZCgpe1xyXG5cdFx0Y29uc29sZS5sb2coJ2FzZGZoa2Fsc2RmJyk7XHJcblx0fVxyXG59XHJcbiJdfQ==