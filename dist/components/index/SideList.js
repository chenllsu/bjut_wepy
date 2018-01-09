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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVMaXN0LmpzIl0sIm5hbWVzIjpbIlNpZGVMaXN0IiwiZGF0YSIsInByb3BzIiwiT3BlblNpZGVMaXN0IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwid2F0Y2giLCJtZXRob2RzIiwiY2xpY2tfc2lkZV9pdGVtIiwia2V5IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCIkcm9vdCIsIiRuYXZpZ2F0ZSIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MkxBQ3BCQyxJLEdBQU8sRSxTQUNQQyxLLEdBQVE7QUFDUDtBQUNBQyxpQkFBYztBQUNiQyxVQUFNQyxPQURPO0FBRWJDLGFBQVM7QUFGSTtBQUZQLEcsU0FPUkMsSyxHQUFRLEUsU0FFUkMsTyxHQUFVO0FBQ1RDLG9CQUFpQix5QkFBQ0MsR0FBRCxFQUFTO0FBQ3pCLFFBQUlDLGNBQUo7QUFDQSxZQUFPRCxHQUFQO0FBQ0MsVUFBSyxHQUFMO0FBQ0NFLGNBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FGLFlBQU1SLFlBQU4sR0FBcUIsS0FBckI7QUFDQVEsWUFBTUcsS0FBTixDQUFZLGlCQUFaLEVBQStCLENBQS9CO0FBQ0E7QUFDRCxVQUFLLEdBQUw7QUFDQ0gsWUFBTUksS0FBTixDQUFZQyxTQUFaLENBQXNCLEVBQUNDLEtBQUssT0FBTixFQUF0QjtBQUNBO0FBUkY7QUFVQTtBQWJRLEc7Ozs7OzJCQWVGO0FBQ1BMLFdBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0E7Ozs7RUE1Qm9DLGVBQUtLLFM7O2tCQUF0QmxCLFEiLCJmaWxlIjoiU2lkZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblx0ZGF0YSA9IHt9XHJcblx0cHJvcHMgPSB7XHJcblx0XHQvLyDngrnlh7vkvqfovrnmoI/op6blj5HmjInpkq7moIflv5dcclxuXHRcdE9wZW5TaWRlTGlzdDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fVxyXG5cdH1cclxuXHR3YXRjaCA9IHtcclxuXHR9XHJcblx0bWV0aG9kcyA9IHtcclxuXHRcdGNsaWNrX3NpZGVfaXRlbTogKGtleSkgPT4ge1xyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRzd2l0Y2goa2V5KSB7XHJcblx0XHRcdFx0Y2FzZSAnMSc6XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndGhpcyBpcyBoYWhhaCcpO1xyXG5cdFx0XHRcdFx0X3RoaXMuT3BlblNpZGVMaXN0ID0gZmFsc2VcclxuXHRcdFx0XHRcdF90aGlzLiRlbWl0KCdjbG9zZV9zaWRlX2xpc3QnLCAwKVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnMic6XHJcblx0XHRcdFx0XHRfdGhpcy4kcm9vdC4kbmF2aWdhdGUoe3VybDogJ3Nwb3J0J30pXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkxvYWQoKXtcclxuXHRcdGNvbnNvbGUubG9nKCdhc2RmaGthbHNkZicpO1xyXG5cdH1cclxufVxyXG4iXX0=