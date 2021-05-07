/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkPropsTest } from '../../utils';
const setUp = (props={}) => {
  const component = shallow(<Headline {...props}/>);
  return component;
}

describe('Describe Component', () => {
  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = [{
        header: 'Test header',
        desc: 'Test description',
        tempArr : {
          fName: 'test fName',
          lName: 'test lName',
          email: 'test@mail.com',
          age: 23,
          onlineStatus: false
        }
      }]
      const propsErr = checkPropsTest(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  })
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'test props',
        desc: 'test description'
      }
      wrapper = setUp(props);
    })
    it('Should renders without error', () => {
      // eslint-disable-next-line no-use-before-define
      const component = findByTestAttr(wrapper, 'HeadlineComponent') 
      expect(component.length).toBe(1);
    })
  })
  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    })
    it('Should not render', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent')
      expect(component.length).toBe(0);
    })
  })
})