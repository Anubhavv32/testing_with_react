import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../utils/index';
const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>);
  return component;
}

describe('Describe Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('It should render without error', () => {
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);
  })
  it('It should render with logo', () => {
    const logo = findByTestAttr(component, 'logoImg');
    expect(logo.length).toBe(1);
  })
})