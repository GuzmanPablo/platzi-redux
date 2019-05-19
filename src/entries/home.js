import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from  'react-redux';

import Home from '../pages/containers/home';
import Data from '../api.json';
import Reducer from '../reducers/data';

const initialState = {
	data: { ...Data }
};
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
	Reducer,
	initialState,
	devTools
);

render(
<Provider store={store}>
	<Home />
</Provider>
, document.getElementById('home-container'));
