import { combineReducers } from 'redux';
import posts from './Posts/reducer';
import formReducer from './formReducer';
export default combineReducers({
  posts, form: formReducer
});