import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../components/SearchForm';
import searches from '../fixtures/searches';

test('should render SearchForm correctly', () => {
  const wrapper = shallow(<SearchForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render SearchForm correctly with search data', () => {
  const wrapper = shallow(<SearchForm search={searches[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<SearchForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<SearchForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<SearchForm search={searches[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: searches[0].description,
    createdAt: searches[0].createdAt
  });
});
