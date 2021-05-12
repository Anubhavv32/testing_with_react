import React from 'react';
import {shallow} from 'enzyme';
import { findByTestAttr, checkPropsTest } from '../../utils';
import Button from './index';

describe('Shared button component', () => {
  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      }
      const propsErr = checkPropsTest(Button, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc
      };
      wrapper = shallow(<Button {...expectedProps} />)
    });
    it('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    })
    it('Should emit a click event on clicking a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    })
  })
})