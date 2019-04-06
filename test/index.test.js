import React from 'react';
import { mount, shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';

configure({ adapter: new Adapter() });

import Slider, { BackgroundElement, RangeElement, HandleElement } from '../src/index.js';

describe('<Slider/>', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Slider
        name="slider1"
        tabIndex={0}
        BackgroundElement={() => <BackgroundElement height={22} />}
        RangeElement={() => <RangeElement height={22} colors={[null, '#2d2d7d']} />}
        HandleElement={HandleElement}
        min={1}
        max={100}
        step={1}
        value={100}
        onChange={() => {}}
      />
    );
    expect(wrapper.html()).to.equal('<div><div style="position:relative"><div tabindex="0"><div style="position:relative;height:22px"><div style="width:100%;height:20px;left:0;position:absolute;top:0"><div style="position:absolute;left:-10px;top:0;width:calc(100% + 20px);height:20px;border-radius:10px;background-color:#E6E6E6"></div></div><div style="width:100%;height:20px;left:0;position:absolute;top:1px"><div style="position:absolute;left:-10px;top:0;width:calc(100% + 20px);height:20px;border-radius:10px;background-color:#EFEFEF"></div></div><div style="width:100%;height:20px;left:0;position:absolute;top:2px"><div style="position:absolute;left:-10px;top:0;width:calc(100% + 20px);height:20px;border-radius:10px;background-color:#F6F6F6"></div></div><div style="width:100%;height:1px;left:0;position:absolute;top:1px"><div style="position:absolute;left:-0.5px;top:0;width:calc(100% + 1px);height:1px;border-radius:0.5px;background-color:#CECECE"></div></div></div></div><div style="position:absolute;top:0;left:0;width:100%"><div style="position:relative;height:22px"><div style="width:100%;height:21px;left:0;position:absolute;top:0"><div style="position:absolute;left:-10.5px;top:0;width:calc(100% + 21px);height:21px;border-radius:10.5px;background-color:rgba(0, 0, 0, 0.3)"></div></div><div style="width:100%;height:21px;left:0;position:absolute;top:1px"><div style="position:absolute;left:-10.5px;top:0;width:calc(100% + 21px);height:21px;border-radius:10.5px;background-color:#2d2d7d"></div></div></div></div><div style="position:absolute;left:100%;top:50%;transform:translate(-50%, -50%);cursor:pointer"><div style="border:1px solid #D2D2D2;background-color:rgba(255, 255, 255, 1);border-radius:50%;width:20px;height:20px;box-shadow:1px .5px 2px #E3E3E3"></div></div></div></div>');
  });
});
