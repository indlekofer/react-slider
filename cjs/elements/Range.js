"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Range = function Range(_ref) {
  var max = _ref.max,
      children = _ref.children;
  return _react["default"].createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: "".concat(max * 100, "%")
    }
  }, children);
};

Range.propTypes = {
  max: _propTypes["default"].number.isRequired,
  children: _propTypes["default"].element.isRequired
};
var _default = Range;
exports["default"] = _default;