import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Background extends Component {
  focus() {
    this.main.focus();
  }

  render() {
    const { tabIndex, children } = this.props;

    return (
      <div ref={ (element) => { this.main = element; } } tabIndex={tabIndex} >
        {children}
      </div>
    );
  }
}

Background.propTypes = {
  tabIndex: PropTypes.number,
  children: PropTypes.element.isRequired
};
