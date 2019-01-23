import React from 'react'
import { shallow } from 'enzyme'
import { SearchResultList } from '../../components/SearchResultList'
import results from '../fixtures/results'

test('should render SearchResultList with results', () => {
  const wrapper = shallow(<SearchResultList results={results} />);
  expect(wrapper).toMatchSnapshot()
})

test('should render SearchResultList with empty message', () => {
  const wrapper = shallow(<SearchResultList results={[]} />)
  expect(wrapper).toMatchSnapshot()
})

