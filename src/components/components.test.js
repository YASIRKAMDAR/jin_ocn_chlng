import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';
import { shallow } from 'enzyme';
import ContIn from './ContIn';
import ContOut from './ContOut';
import PresIn from './PresIn';
import PresOut from './PresOut';

it('renders PresIn without crashing', () => {
  const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><PresIn /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders PresOut without crashing', () => {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><PresOut /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
it('renders ContIn without crashing', () => {
  shallow(<ContIn />);
});

it('renders ContOut without crashing', () => {
    shallow(<ContOut />);
});
