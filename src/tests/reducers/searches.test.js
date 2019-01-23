import searchesReducer from '../../reducers/searches';
import searches from '../fixtures/searches';

test('should set default state', () => {
  const state = searchesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove search by id', () => {
  const action = {
    type: 'REMOVE_SEARCH',
    id: searches[1].id
  };
  const state = searchesReducer(searches, action);
  expect(state).toEqual([searches[0], searches[2]]);
});

test('should not remove searches if id not found', () => {
  const action = {
    type: 'REMOVE_SEARCH',
    id: '-1'
  };
  const state = searchesReducer(searches, action);
  expect(state).toEqual(searches);
});

test('should add a search', () => {
  const search = {
    id: '109',
    description: 'Laptop',
    createdAt: 20000,
  };
  const action = {
    type: 'ADD_SEARCH',
    search
  };
  const state = searchesReducer(searches, action);
  expect(state).toEqual([search, ...searches]);
});

