import moxios from 'moxios';
import {testStore} from '../../utils';
import {fetchPosts} from '../../Action'

describe('fetch posts action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('store is updated correctly', async () => {
    const expectedStore = [{
      title: 'test example 1',
      body: 'Some text'
    },{
      title: 'test example 2',
      body: 'Some text'
    },{
      title: 'test example 3',
      body: 'Some text'
    },{
      title: 'test example 4',
      body: 'Some text'
    }];
    const store = testStore();
    console.log(store, '..................');
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
          status: 200,
          response: expectedStore
      })
  });

  return store.dispatch(fetchPosts())
  .then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedStore);
    })
  })
})