import {types} from '../Action/types';
import { reducer as formReducer } from 'redux-form';

const intialState = {firstName: '', lastName: '', email: '', notes: ''};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = intialState, action) {
  switch(action.type) {
    case types.CHANGE_INPUT:
      return {...action.payload, ...state}
    default:
      return state;
  }
};