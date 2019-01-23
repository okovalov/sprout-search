import uuid from 'uuid'
import { addResult } from './results'
import moment from 'moment'

// GET_SEARCH
export const getSearch = description => {
  return async dispatch => {
    try {
      // Keep in mind guys, that duckduck uses external providers, and some of them do not allow cross domain calls,
      // so for some queries you might get an error response from duckduck - i.e.
      // Access to fetch at 'https://api.duckduckgo.com/?q=aaa&format=json&pretty=1' from origin 'http://localhost:8081' has been blocked
      // by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
      // If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
      //
      // It is just something to keep in mind...
      fetch(`https://api.duckduckgo.com/?q=${description}&format=json&pretty=1`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        dispatch(addSearch({ description: description}))
        
        const result = data.RelatedTopics
        .filter(item => item.FirstURL && item.Text)
        .map( item => ({ id: uuid(), AbstractURL:item.FirstURL, AbstractSource:item.Text}))
        
        dispatch(addResult(result))
      });
    }  catch (errorResponse)  {
      console.log('errorResponse', errorResponse )
    }
  }
}

// ADD_SEARCH
export const addSearch = ({ description = '', createdAt} = {}) => ({
  type: 'ADD_SEARCH',
  search: {
    id: uuid(),
    description,
    createdAt: createdAt ? createdAt : moment()
  }
})

// REMOVE_SEARCH
export const removeSearch = ({ id } = {}) => ({
  type: 'REMOVE_SEARCH',
  id
})

// REUSE_SEARCH
export const reuseSearch = description => {
  return async dispatch => {
    dispatch(getSearch(description))
  }
}