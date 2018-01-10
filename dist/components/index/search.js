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

var Search = function (_wepy$component) {
	_inherits(Search, _wepy$component);

	function Search() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Search);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
			// chenlong: 'cjhe'
		}, _this.props = {
			// 点击侧边栏触发按钮标志
			OpenSideList: {
				type: Boolean,
				default: false
			},
			ShowSearchBack: {
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

	_createClass(Search, [{
		key: 'onLoad',
		value: function onLoad() {}
	}]);

	return Search;
}(_wepy2.default.component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJkYXRhIiwicHJvcHMiLCJPcGVuU2lkZUxpc3QiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJTaG93U2VhcmNoQmFjayIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9wZW5fc2lkZV9saXN0IiwiJGVtaXQiLCJjbGlja19zZWFyY2giLCJjb25zb2xlIiwibG9nIiwiJHJvb3QiLCIkbmF2aWdhdGUiLCJ1cmwiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsSSxHQUFPO0FBQ047QUFETSxHLFFBR1BDLEssR0FBUTtBQUNQO0FBQ0FDLGlCQUFjO0FBQ2JDLFVBQU1DLE9BRE87QUFFUEMsYUFBUztBQUZGLElBRlA7QUFNUEMsbUJBQWdCO0FBQ2ZILFVBQU1DLE9BRFM7QUFFZkMsYUFBUztBQUZNO0FBTlQsRyxRQVdSRSxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDVDtBQUNBQyxtQkFBZ0IsMEJBQUs7QUFDcEIsVUFBS1AsWUFBTCxHQUFvQixDQUFDLE1BQUtBLFlBQTFCO0FBQ0EsVUFBS1EsS0FBTCxDQUFXLHdCQUFYLEVBQXFDLE1BQUtSLFlBQTFDO0FBQ0EsSUFMUTtBQU1UUyxpQkFBYyx3QkFBTTtBQUNuQkMsWUFBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0EsVUFBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCLEVBQUNDLEtBQUssUUFBTixFQUFyQjtBQUNBO0FBVFEsRyxRQVlWQyxNLEdBQVMsRTs7Ozs7MkJBSUEsQ0FFUjs7OztFQXBDa0MsZUFBS0MsUzs7a0JBQXBCbkIsTSIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG5cdGRhdGEgPSB7XHJcblx0XHQvLyBjaGVubG9uZzogJ2NqaGUnXHJcblx0fVxyXG5cdHByb3BzID0ge1xyXG5cdFx0Ly8g54K55Ye75L6n6L655qCP6Kem5Y+R5oyJ6ZKu5qCH5b+XXHJcblx0XHRPcGVuU2lkZUxpc3Q6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuICAgICAgICBcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0U2hvd1NlYXJjaEJhY2s6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH1cclxuXHR9XHJcblx0Y29tcHV0ZWQgPSB7XHJcblx0fVxyXG5cclxuXHRtZXRob2RzID0ge1xyXG5cdFx0Ly8g54K55Ye75L6n6L655qCP5oyJ6ZKuXHJcblx0XHRvcGVuX3NpZGVfbGlzdDogKCkgPT57XHJcblx0XHRcdHRoaXMuT3BlblNpZGVMaXN0ID0gIXRoaXMuT3BlblNpZGVMaXN0XHJcblx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZV9zaWRlbGlzdF9idXR0b24nLCB0aGlzLk9wZW5TaWRlTGlzdCk7XHJcblx0XHR9LFxyXG5cdFx0Y2xpY2tfc2VhcmNoOiAoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdjbGljayBjbGlja19zZWFyY2gnKTtcclxuXHRcdFx0dGhpcy4kcm9vdC4kbmF2aWdhdGUoe3VybDogJ3NlYXJjaCd9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV2ZW50cyA9IHtcclxuXHJcblx0fVxyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuIl19