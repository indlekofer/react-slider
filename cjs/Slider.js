"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Background = _interopRequireDefault(require("./elements/Background.jsx"));

var _Range = _interopRequireDefault(require("./elements/Range.jsx"));

var _Handle = _interopRequireDefault(require("./elements/Handle.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getMousePos(rect, e) {
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.state = {
      dragging: false
    };
    _this.dragStart = _this.dragStart.bind(_assertThisInitialized(_this));
    _this.dragEnd = _this.dragEnd.bind(_assertThisInitialized(_this));
    _this.drag = _this.drag.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "removeeListeners",
    value: function removeeListeners() {
      window.removeeListener('mouseup', this.dragEnd);
      window.removeeListener('mousemove', this.drag);
      window.removeeListener('touchend', this.dragEnd);
      window.removeeListener('touchcancel', this.dragEnd);
      window.removeeListener('touchmove', this.drag);
    }
  }, {
    key: "addSteps",
    value: function addSteps(steps) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          value = _this$props.value,
          onChange = _this$props.onChange,
          name = _this$props.name;
      var newValue = value + steps * step;
      onChange(Math.min(Math.max(newValue, min), max), name);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var _this2 = this;

      var handlers = {
        38: function _() {
          return _this2.addSteps(1);
        },
        // ARROW_UP
        39: function _() {
          return _this2.addSteps(1);
        },
        // ARROW_RIGHT
        37: function _() {
          return _this2.addSteps(-1);
        },
        // ARROW_LEFT
        40: function _() {
          return _this2.addSteps(-1);
        },
        // ARROW_DOWN
        33: function _() {
          return _this2.addSteps(10);
        },
        // PAGE_UP
        34: function _() {
          return _this2.addSteps(-10);
        } // PAGE_DOWN

      };
      var handler = handlers[e.keyCode];

      if (handler) {
        e.preventDefault();
        handler();
      }
    }
  }, {
    key: "drag",
    value: function drag(e) {
      var pos = e.touches ? e.touches[0] : e;
      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          name = _this$props2.name;
      var rect = this.main.getBoundingClientRect();
      var mousePos = getMousePos(rect, pos);
      var percentage = Math.min(Math.max(mousePos.x / rect.width, 0), 1);
      var newValue = min + percentage * (max - min);
      var stepValue = Math.round(newValue / step) * step;

      if (value !== stepValue) {
        onChange(stepValue, name);
      }
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(e) {
      if (e.type === 'mouseup') {
        this.drag(e);
      }

      window.removeEventListener('mouseup', this.dragEnd);
      window.removeEventListener('mousemove', this.drag);
      window.removeEventListener('touchend', this.dragEnd);
      window.removeEventListener('touchcancel', this.dragEnd);
      window.removeEventListener('touchmove', this.drag);
      this.setState({
        dragging: false
      });
    }
  }, {
    key: "dragStart",
    value: function dragStart(e) {
      this.drag(e);

      if (e.type === 'mousedown') {
        e.preventDefault();
        this.background.focus();
      }

      window.addEventListener('mouseup', this.dragEnd, false);
      window.addEventListener('mousemove', this.drag, false);
      window.addEventListener('touchend', this.dragEnd, false);
      window.addEventListener('touchcancel', this.dragEnd, false);
      window.addEventListener('touchmove', this.drag, false);
      this.setState({
        dragging: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          value = _this$props3.value,
          style = _this$props3.style,
          tabIndex = _this$props3.tabIndex,
          BackgroundElement = _this$props3.BackgroundElement,
          RangeElement = _this$props3.RangeElement,
          HandleElement = _this$props3.HandleElement;
      var sliderPosition = (value - min) / (max - min);
      return _react["default"].createElement("div", {
        style: style
      }, _react["default"].createElement("div", {
        ref: function ref(element) {
          _this3.main = element;
        },
        style: {
          position: 'relative'
        },
        onMouseDown: this.dragStart,
        onTouchStart: this.dragStart,
        onKeyDown: this.handleKeyDown
      }, _react["default"].createElement(_Background["default"], {
        ref: function ref(element) {
          _this3.background = element;
        },
        tabIndex: tabIndex
      }, _react["default"].createElement(BackgroundElement, null)), _react["default"].createElement(_Range["default"], {
        max: sliderPosition
      }, _react["default"].createElement(RangeElement, null)), _react["default"].createElement(_Handle["default"], {
        position: sliderPosition
      }, _react["default"].createElement(HandleElement, null))));
    }
  }]);

  return Slider;
}(_react.Component);

exports["default"] = Slider;
Slider.propTypes = {
  name: _propTypes["default"].string,
  tabIndex: _propTypes["default"].number,
  style: _propTypes["default"].object,
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number.isRequired,
  value: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  BackgroundElement: _propTypes["default"].func.isRequired,
  RangeElement: _propTypes["default"].func.isRequired,
  HandleElement: _propTypes["default"].func.isRequired
};
Slider.defaultProps = {
  style: {}
};