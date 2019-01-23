// Results Reducer

const expensesReducerDefaultState = [
]

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return action.result
    case 'REMOVE_RESULT':
      return []
    default:
      return state;
  }
}
