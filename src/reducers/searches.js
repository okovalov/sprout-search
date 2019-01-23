// Searches Reducer

const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return [
        action.search,
        ...state
      ].slice(0, 5) ;
    case 'REMOVE_SEARCH':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}
