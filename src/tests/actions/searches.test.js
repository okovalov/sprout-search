import moment from 'moment'
import { addSearch, removeSearch } from '../../actions/searches'

test('should setup remove search action object', () => {
  const action = removeSearch({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_SEARCH',
    id: '123abc'
  });
});

test('should setup add search action object with provided values', () => {
  const searchData = {
    description: 'Rent',
    createdAt: 1000,
  };
  const action = addSearch(searchData);
  expect(action).toEqual({
    type: 'ADD_SEARCH',
    search: {
      ...searchData,
      id: expect.any(String)
    }
  });
});

test('should setup add search action object with default values', () => {
  const action = addSearch();
  expect(action).toEqual({
    type: 'ADD_SEARCH',
    search: {
      id: expect.any(String),
      description: '',
      createdAt: moment()
    }
  });
});
