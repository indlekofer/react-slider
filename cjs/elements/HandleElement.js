"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HandleElement = function HandleElement(_ref) {
  var style = _ref.style;
  return _react["default"].createElement("div", {
    style: style
  });
};

HandleElement.defaultProps = {
  style: {
    border: '1px solid #D2D2D2',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    boxShadow: '1px .5px 2px #E3E3E3'
  }
};
HandleElement.propTypes = {
  style: _propTypes["default"].object
};
var _default = HandleElement;
exports["default"] = _default;