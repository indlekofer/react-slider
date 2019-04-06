"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RoundedBar = function RoundedBar(_ref) {
  var height = _ref.height,
      color = _ref.color,
      top = _ref.top;
  return _react["default"].createElement("div", {
    style: {
      width: '100%',
      height: "".concat(height, "px"),
      left: 0,
      position: 'absolute',
      top: top
    }
  }, _react["default"].createElement("div", {
    style: {
      position: 'absolute',
      left: "-".concat(height / 2, "px"),
      top: 0,
      width: "calc(100% + ".concat(height, "px)"),
      height: "".concat(height, "px"),
      borderRadius: "".concat(height / 2, "px"),
      backgroundColor: color
    }
  }));
};

RoundedBar.propTypes = {
  height: _propTypes["default"].number,
  color: _propTypes["default"].string,
  top: _propTypes["default"].number
};
var _default = RoundedBar;
exports["default"] = _default;