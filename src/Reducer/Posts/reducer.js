import {types} from '../../Action/types';

const intialState = [];
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = intialState, action) {
  switch(action.type) {
    case types.GET_POSTS:
      return action.payload
    default:
      return state;
  }
};