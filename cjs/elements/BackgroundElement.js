"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RoundedBar = _interopRequireDefault(require("./RoundedBar.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BackgroundElement = function BackgroundElement(_ref) {
  var height = _ref.height,
      colors = _ref.colors;
  return _react["default"].createElement("div", {
    style: {
      position: 'relative',
      height: "".concat(height, "px")
    }
  }, _react["default"].createElement(_RoundedBar["default"], {
    height: height - 2,
    color: colors[0] || '#E6E6E6',
    top: 0
  }), _react["default"].createElement(_RoundedBar["default"], {
    height: height - 2,
    color: colors[1] || '#EFEFEF',
    top: 1
  }), _react["default"].createElement(_RoundedBar["default"], {
    height: height - 2,
    color: colors[2] || '#F6F6F6',
    top: 2
  }), _react["default"].createElement(_RoundedBar["default"], {
    height: 1,
    color: colors[3] || '#CECECE',
    top: 1
  }));
};

BackgroundElement.defaultProps = {
  height: 10,
  colors: []
};
BackgroundElement.propTypes = {
  height: _propTypes["default"].number,
  colors: _propTypes["default"].array
};
var _default = BackgroundElement;
exports["default"] = _default;