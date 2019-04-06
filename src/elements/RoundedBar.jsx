import React from 'react';
import PropTypes from 'prop-types';

const RoundedBar = ({ height, color, top }) => {
  return (
    <div
      style={{
        width: '100%',
        height: `${height}px`,
        left: 0,
        position: 'absolute',
        top: top
      }}>

      <div
        style={{
          position: 'absolute',
          left: `-${height/2}px`,
          top: 0,
          width: `calc(100% + ${height}px)`,
          height: `${height}px`,
          borderRadius: `${height / 2}px`,
          backgroundColor: color
        }} />

    </div>
  );
};

RoundedBar.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  top: PropTypes.number
};

export default RoundedBar;
