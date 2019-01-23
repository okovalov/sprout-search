import React from 'react'
import { connect } from 'react-redux'
import RecentSearchesListItem from './RecentSearchesListItem'
import {removeSearch, reuseSearch } from '../actions/searches'

export const RecentSearchesList = (props) => (
  <div>
    {
      props.searches.length === 0 ? (
        <p>No searches found</p>
      ) : (
          props.searches.map((search) => {
            return <RecentSearchesListItem
              key={search.id}
              removeSearch={props.removeSearch}
              reuseSearch={props.reuseSearch}
              {...search}
            />
          })
        )
    }
  </div>
)

const mapStateToProps = state => ({ searches: state.searches })

const mapDispatchToProps = dispatch => ({
  removeSearch: (search) => dispatch(removeSearch(search)),
  reuseSearch: (search) => dispatch(reuseSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearchesList)
