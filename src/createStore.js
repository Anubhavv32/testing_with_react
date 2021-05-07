import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './Reducer';
  export const middlewares = [ReduxThunk];
  export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)


export const store = createStoreWithMiddleware(rootReducer);
