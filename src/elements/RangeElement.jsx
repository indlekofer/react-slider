import React from 'react';
import PropTypes from 'prop-types';

import RoundedBar from './RoundedBar.jsx';

const RangeElement = ({height, colors}) => {
  return (
    <div style={{ position: 'relative', height: `${height}px`}}>
      <RoundedBar
        height={(height - 1)}
        color={colors[0] || 'rgba(0, 0, 0, 0.3)'}
        top={0} />
      <RoundedBar
        height={(height - 1)}
        color={colors[1] || 'rgba(80, 80, 80, 1)'}
        top={1} />
    </div>
  );
};

RangeElement.defaultProps = {
  height: 10,
  colors: []
};
RangeElement.propTypes = {
  height: PropTypes.number,
  colors: PropTypes.array
};
export default RangeElement;
