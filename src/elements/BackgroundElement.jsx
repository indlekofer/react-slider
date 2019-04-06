import React from 'react';
import PropTypes from 'prop-types';

import RoundedBar from './RoundedBar.jsx';

const BackgroundElement = ({height, colors}) => {
  return (
    <div style={{ position: 'relative', height: `${height}px` }}>
      <RoundedBar
        height={(height - 2)}
        color={colors[0] || '#E6E6E6'}
        top={0} />
      <RoundedBar
        height={(height - 2)}
        color={colors[1] || '#EFEFEF'}
        top={1} />
      <RoundedBar
        height={(height - 2)}
        color={colors[2] || '#F6F6F6'}
        top={2} />
      <RoundedBar
        height={1}
        color={colors[3] || '#CECECE'}
        top={1} />
    </div>
  );
};

BackgroundElement.defaultProps = {
  height: 10,
  colors: []
};

BackgroundElement.propTypes = {
  height: PropTypes.number,
  colors: PropTypes.array
};

export default BackgroundElement;
