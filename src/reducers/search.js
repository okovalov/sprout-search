// Searches Reducer

const expensesReducerDefaultState = { }

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'REUSE_SEARCH':
      return {
        description: action.description
      }
    default:
      return state;
  }
}
