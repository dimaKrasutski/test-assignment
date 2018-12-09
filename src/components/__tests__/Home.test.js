import React from 'react';
import Enzyme,{ mount} from 'enzyme';
import Home from '../Home';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../../store';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure( {adapter: new Adapter() });

let wrapped;
const store = ConfigureStore();

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>)
});

afterEach(() => {
  wrapped.unmount();
})

it('has two Links', () => {
  expect(wrapped.find('Link').length).toEqual(2)
});
