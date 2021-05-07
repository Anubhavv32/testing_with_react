import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './createStore';
import { shallow } from 'enzyme';
import React from 'react';

import {testStore, findByTestAttr } from './utils'
import App from './App';

const setUp = (initialState= {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};
describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [{
        title: 'Example title 1',
        body: ' example body',
        id: '1'
      },{
        title: 'Example title 2',
        body: ' example body',
        id: '2'
      },{
        title: 'Example title 3',
        body: ' example body',
        id: '3'
      },{
        title: 'Example title 4',
        body: ' example body',
        id: '4'
      }]
    }
    wrapper = setUp(initialState);
  });
  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  })
  it('test hide btn handler', () => {
    const classInstance = wrapper.instance();
    classInstance.hideBtnHandler();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  })
  it('test hide btn handler', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.plusCounter(6);
    expect(newValue).toBe(7);
  })
})