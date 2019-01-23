import React from 'react'
import { shallow } from 'enzyme'
import results from '../fixtures/results'
import SearchResultListItem from '../../components/SearchResultListItem'

test('should render SearchResultListItem correctly', () => {
  const wrapper = shallow(<SearchResultListItem {...results[0]} />)
  expect(wrapper).toMatchSnapshot()
})
