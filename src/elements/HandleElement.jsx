import React from 'react';
import PropTypes from 'prop-types';

const HandleElement = ({style}) => {
  return <div style={style} />;
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
  style: PropTypes.object
};

export default HandleElement;
