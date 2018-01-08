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

var search = function (_wepy$page) {
	_inherits(search, _wepy$page);

	function search() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, search);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
			testprop: String
		}, _this.computed = {}, _this.methods = {
			open_side_list: function open_side_list() {
				console.log('click open side-list...', this.testprop);
				this.$emit('test', 'chenlong');
			}
		}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(search, [{
		key: 'onLoad',
		value: function onLoad() {
			console.log('this is search props:', this.testprop);
		}
	}]);

	return search;
}(_wepy2.default.page);

exports.default = search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJkYXRhIiwicHJvcHMiLCJ0ZXN0cHJvcCIsIlN0cmluZyIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9wZW5fc2lkZV9saXN0IiwiY29uc29sZSIsImxvZyIsIiRlbWl0IiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxJLEdBQU8sRSxRQUVQQyxLLEdBQVE7QUFDUEMsYUFBVUM7QUFESCxHLFFBR1JDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNUQyxtQkFBZ0IsMEJBQVU7QUFDekJDLFlBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1QyxLQUFLTixRQUE1QztBQUNBLFNBQUtPLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLFVBQW5CO0FBQ0E7QUFKUSxHLFFBT1ZDLE0sR0FBUyxFOzs7OzsyQkFJQTtBQUNSSCxXQUFRQyxHQUFSLENBQVksdUJBQVosRUFBcUMsS0FBS04sUUFBMUM7QUFDQTs7OztFQXRCa0MsZUFBS1MsSTs7a0JBQXBCWixNIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHRkYXRhID0ge1xyXG5cdH1cclxuXHRwcm9wcyA9IHtcclxuXHRcdHRlc3Rwcm9wOiBTdHJpbmdcclxuXHR9O1xyXG5cdGNvbXB1dGVkID0ge1xyXG5cdH1cclxuXHJcblx0bWV0aG9kcyA9IHtcclxuXHRcdG9wZW5fc2lkZV9saXN0OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2sgb3BlbiBzaWRlLWxpc3QuLi4nLCB0aGlzLnRlc3Rwcm9wKTtcclxuXHRcdFx0dGhpcy4kZW1pdCgndGVzdCcsICdjaGVubG9uZycpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXZlbnRzID0ge1xyXG5cclxuXHR9XHJcblxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd0aGlzIGlzIHNlYXJjaCBwcm9wczonLCB0aGlzLnRlc3Rwcm9wKTtcclxuXHR9XHJcbn1cclxuIl19