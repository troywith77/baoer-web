import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store';
import { Provider } from 'react-redux';
import configureRoutes from 'routes'
import 'styles/base.scss'
import { LOGIN_SUCCSED } from 'actions/Auth'

const store = configureStore()

const routes = configureRoutes(store)

ReactDOM.render(
	<Provider store={store}>
  		{routes}
	</Provider>,
  document.getElementById('root')
);
