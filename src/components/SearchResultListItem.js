import React from 'react'

const SearchResultListItem = ({ AbstractSource, AbstractURL }) => (
  <div>
    <a href={AbstractURL}>{AbstractSource}</a>
    <p>More details about {AbstractSource}</p>
  </div>
)

export default SearchResultListItem
