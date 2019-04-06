import React from 'react';
import PropTypes from 'prop-types';

const Range = ({ max, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${max * 100}%`,
      }} >
      {children}
    </div>
  );
};
Range.propTypes = {
  max: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};

export default Range;
