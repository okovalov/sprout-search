import { createStore, combineReducers, applyMiddleware } from 'redux'
import searchesReducer from '../reducers/searches'
import resultsReducer from '../reducers/results'
import searchReducer from '../reducers/search'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default () => {
  return createStore(
    combineReducers({
      searches: searchesReducer,
      results: resultsReducer,
      search: searchReducer
    }),
    composeWithDevTools(
      applyMiddleware(
        thunk
      )
    )
  )
}

