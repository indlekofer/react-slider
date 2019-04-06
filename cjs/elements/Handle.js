"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Handle = function Handle(_ref) {
  var position = _ref.position,
      children = _ref.children;
  return _react["default"].createElement("div", {
    style: {
      position: 'absolute',
      left: "".concat(position * 100, "%"),
      top: '50%',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer'
    }
  }, children);
};

Handle.propTypes = {
  position: _propTypes["default"].number.isRequired,
  children: _propTypes["default"].element.isRequired
};
var _default = Handle;
exports["default"] = _default;