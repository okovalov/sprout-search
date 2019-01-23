import resultsReducer from '../../reducers/results';
// import results from '../fixtures/results';

test('should set default state', () => {
  const state = resultsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a result', () => {
  const result = [
    {
    id: '1',
    AbstractSource: 'Laptop',
    AbstractURL: 'http://laptop.com',
  },
    {
    id: '2',
    AbstractSource: 'Mac',
    AbstractURL: 'http://mac.com',
  }
  ];
  const action = {
    type: 'ADD_RESULT',
    result
  };
  const state = resultsReducer(result, action);
  expect(state).toEqual(result);
});

