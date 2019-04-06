"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RoundedBar = _interopRequireDefault(require("./RoundedBar.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RangeElement = function RangeElement(_ref) {
  var height = _ref.height,
      colors = _ref.colors;
  return _react["default"].createElement("div", {
    style: {
      position: 'relative',
      height: "".concat(height, "px")
    }
  }, _react["default"].createElement(_RoundedBar["default"], {
    height: height - 1,
    color: colors[0] || 'rgba(0, 0, 0, 0.3)',
    top: 0
  }), _react["default"].createElement(_RoundedBar["default"], {
    height: height - 1,
    color: colors[1] || 'rgba(80, 80, 80, 1)',
    top: 1
  }));
};

RangeElement.defaultProps = {
  height: 10,
  colors: []
};
RangeElement.propTypes = {
  height: _propTypes["default"].number,
  colors: _propTypes["default"].array
};
var _default = RangeElement;
exports["default"] = _default;