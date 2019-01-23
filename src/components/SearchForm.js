import React from 'react'
import moment from 'moment'

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.search ? props.search.description : '',
      createdAt: props.search ? moment(props.search.createdAt) : moment(),
      error: ''
    }
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide description' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
      })
      this.setState(() => ({ description: '' }))
    }
  }
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Search...'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <button>Search</button>
        </form>
      </div>
    )
  }
}
