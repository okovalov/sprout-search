import React from 'react'
import Moment from 'react-moment'
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
      <Moment fromNow>
      {props.createdAt}
    </Moment>&nbsp;
      <button onClick={(e) => {
        props.removeSearch({id: props.id})
      }}>X</button>
    </p>
  </div>
)

export default RecentSearchesListItem
