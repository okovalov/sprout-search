import React from 'react'
import { shallow } from 'enzyme'
import { RecentSearchesList } from '../../components/RecentSearchesList'
import searches from '../fixtures/searches'

test('should render RecentSearchesList with searches', () => {
  const wrapper = shallow(<RecentSearchesList searches={searches} />);
  expect(wrapper).toMatchSnapshot()
})

test('should render RecentSearchesList with empty message', () => {
  const wrapper = shallow(<RecentSearchesList searches={[]} />)
  expect(wrapper).toMatchSnapshot()
})
