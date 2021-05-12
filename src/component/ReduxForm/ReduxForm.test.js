/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ReduxForm from './index';
import { findByTestAttr, checkPropsTest } from '../../utils';

import { createStore, Store, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
});

let store;

const setUp = (props={}) => {
  const component = shallow(<ReduxForm {...props}/>);
  return component;
}

describe('Describe Component', () => {
  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    const onSubmitFn = jest.fn();
    const defaultProps = {
      editProfile: () => {},
      submitting: false,
      handleSubmit: () => {},
      invalid: false,
      initialValues: {},
    }
    beforeEach(() => {
      store = createStore(rootReducer);
      // const expectedProps = {
      //   buttonText: 'Example Button Text',
      //   emitEvent: mockFunc
      // };
      wrapper = setUp(defaultProps);
    });
    // console.log(mount(<ReduxForm onSubmit={onSubmitFn}/>))
    it('Should render a form', () => {
      const form = wrapper.find('Field');
      // findByTestAttr(wrapper, 'reduxForm');
      console.log(form);
      expect(form.length).toBe(1);
    })
    // it('Should emit a click event on clicking a button', () => {
    //   console.log(wrapper.debug());
    //   const form = wrapper.find('form');
    //   form.simulate('submit');
    //   const callback = mockFunc.mock.calls.length;
    //   expect(callback).toBe(1);
    // })
  })
})