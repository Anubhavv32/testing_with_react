import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkPropsTest} from '../../utils';
import ListItem from './index';

describe('Listitem component', () => {
  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'title ',
        emitEvent: () => {

        }
      }
      const propsErr = checkPropsTest(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const expectedProps = {
        title: 'test title',
        desc:'test desc'
      };
      wrapper = shallow(<ListItem {...expectedProps} />)
    });
    it('Should render a button', () => {
      const listItem = findByTestAttr(wrapper, 'listItemComponent');
      expect(listItem.length).toBe(1);
    })
  })
})