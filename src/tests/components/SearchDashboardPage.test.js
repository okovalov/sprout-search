import React from 'react';
import { shallow } from 'enzyme';
import { SearchDashboardPage } from '../../components/SearchDashboardPage';

test('should render SearchDashboardPage correctly', () => {
  const wrapper = shallow(<SearchDashboardPage />);
  expect(wrapper).toMatchSnapshot();
})

