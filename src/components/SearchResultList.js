import React from 'react'
import SearchResultListItem from './SearchResultListItem'

export const SearchResultList = (props) => (
  <div>
    {
      props.results.length > 0 ? (
        <h2>Your results are</h2>
        
      ) : (<p></p>)
    }
    {
      props.results.length === 0 ? (
        <p></p>
      ) : (
          props.results.map((result) => {
            return <SearchResultListItem
              key={result.id}
              {...result}
            />
          })
        )
    }
  </div>
)

export default SearchResultList
