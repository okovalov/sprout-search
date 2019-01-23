import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

const RecentSearchesListItem = (props) => (
  <div>
    <Link to={`#`} onClick={ (e) => {
      props.reuseSearch( props.description)
    }
    }>
      <h3>{props.description}</h3>
    </Link>
    <p>Created&nbsp;-&nbsp;
      {moment(props.createdAt).fromNow()}
      <button onClick={(e) => {
        props.removeSearch({id: props.id})
      }}>X</button>
    </p>
  </div>
)

export default RecentSearchesListItem
