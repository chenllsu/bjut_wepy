'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

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

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(search , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJkYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNDOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsSSxHQUFPLEU7Ozs7RUFENEIsZUFBS0MsSTs7a0JBQXBCRixNIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblx0ZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHRcdGRhdGEgPSB7fVxyXG5cdH1cclxuIl19