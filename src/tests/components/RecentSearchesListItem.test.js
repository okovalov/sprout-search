import React from 'react'
import { shallow } from 'enzyme'
import searches from '../fixtures/searches'
import RecentSearchesListItem from '../../components/RecentSearchesListItem'

test('should render RecentSearchesListItem correctly', () => {
  const wrapper = shallow(<RecentSearchesListItem {...searches[0]} />)
  expect(wrapper).toMatchSnapshot()
})
