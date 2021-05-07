import {types} from '../../Action/types';
import postReducer from './reducer';


describe('Posts reducer', () => {
  it('Should return default store', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new store', () => {
    const posts = [{title: 'test title 1'}, {title: 'test title 2'}, {title: 'test title 3'}];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
})