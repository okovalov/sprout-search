import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  createdAt: moment(0).add(4, 'days').valueOf()
}]
