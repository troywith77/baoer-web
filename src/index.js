import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store';
import { Provider } from 'react-redux';
import configureRoutes from 'routes'
import 'styles/base.scss'
import cookie from 'react-cookie'
import { LOGIN_SUCCSED } from 'actions/Auth'

const store = configureStore()

const Auth = {
	Token: cookie.load('Token'),
	UserInfo: {
		Nickname: cookie.load('Nickname')
	}
}

store.dispatch(LOGIN_SUCCSED(Auth))

const routes = configureRoutes(store)

ReactDOM.render(
	<Provider store={store}>
  		{routes}
	</Provider>,
  document.getElementById('root')
);
