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
		}, _this2.watch = {}, _this2.methods = {
			click_side_item: function click_side_item(key) {
				var _this = _this2;
				switch (key) {
					case '1':
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
		value: function onLoad() {}
	}]);

	return SideList;
}(_wepy2.default.component);

exports.default = SideList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVMaXN0LmpzIl0sIm5hbWVzIjpbIlNpZGVMaXN0IiwiZGF0YSIsInByb3BzIiwiT3BlblNpZGVMaXN0IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwid2F0Y2giLCJtZXRob2RzIiwiY2xpY2tfc2lkZV9pdGVtIiwia2V5IiwiX3RoaXMiLCIkZW1pdCIsIiRyb290IiwiJG5hdmlnYXRlIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzsyTEFDcEJDLEksR0FBTyxFLFNBQ1BDLEssR0FBUTtBQUNQO0FBQ0FDLGlCQUFjO0FBQ2JDLFVBQU1DLE9BRE87QUFFYkMsYUFBUztBQUZJO0FBRlAsRyxTQU9SQyxLLEdBQVEsRSxTQUVSQyxPLEdBQVU7QUFDVEMsb0JBQWlCLHlCQUFDQyxHQUFELEVBQVM7QUFDekIsUUFBSUMsY0FBSjtBQUNBLFlBQU9ELEdBQVA7QUFDQyxVQUFLLEdBQUw7QUFDQ0MsWUFBTVIsWUFBTixHQUFxQixLQUFyQjtBQUNBUSxZQUFNQyxLQUFOLENBQVksaUJBQVosRUFBK0IsQ0FBL0I7QUFDQTtBQUNELFVBQUssR0FBTDtBQUNDRCxZQUFNRSxLQUFOLENBQVlDLFNBQVosQ0FBc0IsRUFBQ0MsS0FBSyxPQUFOLEVBQXRCO0FBQ0E7QUFQRjtBQVNBO0FBWlEsRzs7Ozs7MkJBY0YsQ0FDUDs7OztFQTFCb0MsZUFBS0MsUzs7a0JBQXRCaEIsUSIsImZpbGUiOiJTaWRlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHRkYXRhID0ge31cclxuXHRwcm9wcyA9IHtcclxuXHRcdC8vIOeCueWHu+S+p+i+ueagj+inpuWPkeaMiemSruagh+W/l1xyXG5cdFx0T3BlblNpZGVMaXN0OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9XHJcblx0fVxyXG5cdHdhdGNoID0ge1xyXG5cdH1cclxuXHRtZXRob2RzID0ge1xyXG5cdFx0Y2xpY2tfc2lkZV9pdGVtOiAoa2V5KSA9PiB7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdHN3aXRjaChrZXkpIHtcclxuXHRcdFx0XHRjYXNlICcxJzpcclxuXHRcdFx0XHRcdF90aGlzLk9wZW5TaWRlTGlzdCA9IGZhbHNlXHJcblx0XHRcdFx0XHRfdGhpcy4kZW1pdCgnY2xvc2Vfc2lkZV9saXN0JywgMClcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJzInOlxyXG5cdFx0XHRcdFx0X3RoaXMuJHJvb3QuJG5hdmlnYXRlKHt1cmw6ICdzcG9ydCd9KVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0b25Mb2FkKCl7XHJcblx0fVxyXG59XHJcbiJdfQ==