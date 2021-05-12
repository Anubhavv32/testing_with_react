import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducer'; 
import { middlewares } from '../createStore';

export const checkPropsTest = (component, expectedProps) => {
  return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
}

export function findByTestAttr (component, attr) {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export function testStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}