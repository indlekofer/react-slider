import React, { useState } from 'react';
import { render } from 'react-dom';

import Slider, { BackgroundElement, RangeElement, HandleElement } from '../../../src/index.js';

const App = () => {
  const [slider1, setSlider1] = useState(1);
  const [slider2, setSlider2] = useState(3000);

  const handleChange = (value, name) => {
    switch (name) {
    case 'slider1':
      setSlider1(value);
      break;
    case 'slider2':
      setSlider2(value);
      break;
    }
  };

  return (
    <div style={{width: '50%', padding: '20px'}}>
      <Slider
        name="slider1"
        tabIndex={0}
        BackgroundElement={() => <BackgroundElement height={22} />}
        RangeElement={() => <RangeElement height={22} colors={[null, '#2d2d7d']} />}
        HandleElement={HandleElement}
        min={1}
        max={100}
        step={1}
        value={slider1}
        onChange={handleChange}
      />
      <Slider
        style={{margin: '20px 0'}}
        name="slider2"
        BackgroundElement={BackgroundElement}
        RangeElement={RangeElement}
        HandleElement={HandleElement}
        min={100}
        max={10000}
        step={100}
        value={slider2}
        onChange={handleChange}
      />
    </div>
  );
};

render(<App />, document.getElementById('demo'));
