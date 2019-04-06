import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Background from './elements/Background.jsx';
import Range from './elements/Range.jsx';
import Handle from './elements/Handle.jsx';

function getMousePos(rect, e) {
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}
      
export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = { dragging: false };

    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.drag = this.drag.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  removeeListeners() {
    window.removeeListener('mouseup', this.dragEnd);
    window.removeeListener('mousemove', this.drag);

    window.removeeListener('touchend', this.dragEnd);
    window.removeeListener('touchcancel', this.dragEnd);
    window.removeeListener('touchmove', this.drag);    
  }

  addSteps(steps) {
    const { min, max, step, value, onChange, name } = this.props;

    const newValue = value + steps * step;

    onChange(Math.min(Math.max(newValue, min), max), name);
  }

  handleKeyDown(e) {
    const handlers = {
      38: () => this.addSteps(1), // ARROW_UP
      39: () => this.addSteps(1), // ARROW_RIGHT
      37: () => this.addSteps(-1), // ARROW_LEFT
      40: () => this.addSteps(-1), // ARROW_DOWN
      33: () => this.addSteps(10), // PAGE_UP
      34: () => this.addSteps(-10), // PAGE_DOWN
    };
    const handler = handlers[e.keyCode];
    if (handler) {
      e.preventDefault();
      handler();
    }
  }

  drag(e) {
    const pos = (e.touches) ? e.touches[0] : e;

    const { min, max, step, value, onChange, name } = this.props;

    const rect = this.main.getBoundingClientRect();

    const mousePos = getMousePos(rect, pos);

    const percentage = Math.min(Math.max(mousePos.x / rect.width, 0), 1);

    const newValue = min + percentage * (max - min);
    const stepValue = Math.round(newValue / step) * step;

    if (value !== stepValue) {
      onChange(stepValue, name);
    }
  }

  dragEnd(e) {
    if (e.type === 'mouseup') {
      this.drag(e);
    }

    window.removeEventListener('mouseup', this.dragEnd);
    window.removeEventListener('mousemove', this.drag);

    window.removeEventListener('touchend', this.dragEnd);
    window.removeEventListener('touchcancel', this.dragEnd);
    window.removeEventListener('touchmove', this.drag);

    this.setState({ dragging: false });
  }

  dragStart(e) {
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

    this.setState({ dragging: true });
  }

  render() {
    const {
      min,
      max,
      value,
      style,
      tabIndex,
      BackgroundElement,
      RangeElement,
      HandleElement
    } = this.props;

    const sliderPosition = (value - min) / (max - min);

    return (
      <div style={style} >
        <div
          ref={ (element) => { this.main = element; } }
          style={{ position: 'relative' }}
          onMouseDown={this.dragStart}
          onTouchStart={this.dragStart}
          onKeyDown={this.handleKeyDown} >
          <Background
            ref={ (element) => { this.background = element; } }
            tabIndex={tabIndex} >
            <BackgroundElement />
          </Background>
          <Range max={sliderPosition} >
            <RangeElement />
          </Range>
          <Handle position={sliderPosition} >
            <HandleElement />
          </Handle>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  name: PropTypes.string,
  tabIndex: PropTypes.number,
  style: PropTypes.object,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  BackgroundElement: PropTypes.func.isRequired,
  RangeElement: PropTypes.func.isRequired,
  HandleElement: PropTypes.func.isRequired
};

Slider.defaultProps = {
  style: {}
};
