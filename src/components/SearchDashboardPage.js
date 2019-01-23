import React from 'react'
import {connect} from 'react-redux'
import SearchForm from './SearchForm'
import RecentSearchesList from './RecentSearchesList'
import {getSearch} from '../actions/searches'
import SearchResultList from './SearchResultList'
import { Pagination } from './Pagination'

export class SearchDashboardPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentItems: [],
      totalRecords: null,
      currentPage: 1,
      pageLimit: 2
    }
  }
  
  handlePageChanged = data => {
    const allItems  = this.props.results
    const { currentPage, pageLimit } = data
  
    const offset = (currentPage - 1) * pageLimit
    const currentItems = allItems.slice(offset, offset + pageLimit)
    
    this.setState(() => {
      return {
        currentPage,
        currentItems,
        totalRecords: allItems.length,
        pageLimit
      }
    })
  }
  
  componentWillReceiveProps(nextProps, nextContext) {
    if (!nextProps.results.length) {
      return
    }
    
    const allItems  = nextProps.results
    const { currentPage, pageLimit } = this.state
  
    const offset = (currentPage - 1) * pageLimit
    const currentItems = allItems.slice(offset, offset + pageLimit)

    this.setState(() => {
      return {
        currentPage,
        currentItems,
        pageLimit,
        totalRecords: allItems.length
      }
    })
  }
  
  onSubmit = search => {
    this.props.getSearch(search.description)
  }
  
  renderPagination = () => {
    const {currentPage, pageLimit, totalRecords, currentItems } = this.state
    
    if (!currentItems || currentItems.length < 1) {
      return (<div></div>)
    }
    
    return (
      <Pagination
        totalRecords={totalRecords}
        recordsName={''}
        currentPage={currentPage}
        pageLimit={pageLimit}
        pageNeighbours={1}
        onPageChanged={this.handlePageChanged} />
    )
  }
  
  render() {
    return (
      <div>
        <SearchForm
          onSubmit={this.onSubmit}
        />
        <RecentSearchesList />
        <SearchResultList
          results={this.state.currentItems}
        />
        {this.renderPagination()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ results: state.results })

const mapDispatchToProps = dispatch => ({
  getSearch: (search) => dispatch(getSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchDashboardPage)
