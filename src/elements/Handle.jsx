import React from 'react';
import PropTypes from 'prop-types';

const Handle = ({ position, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${position * 100}%`,
        top: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer'
      }} >
      {children}
    </div>
  );
};

Handle.propTypes = {
  position: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};

export default Handle;
