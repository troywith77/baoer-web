import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from 'components/Header'
import LoginContainer from 'containers/LoginContainer'
import SubjectContainer from 'containers/SubjectContainer'
import ArticleContainer from 'containers/ArticleContainer'
import MainContainer from 'containers/MainContainer'


const configureRoutes = store => {
	const chechAuth = (nextState, replace) => {
		if(!store.getState().Auth.isAuthenticated) {
			replace({ pathname: '/login' })
		}
	}
	const chechLogin = (nextState, replace) => {
		if(store.getState().Auth.isAuthenticated) {
			replace({ pathname: '/' })
		}
	}
	return (
		<Router history={browserHistory}>
			<Route path='/' component={MainContainer} onEnter={chechAuth}>
				<IndexRoute component={SubjectContainer} />
				<Route path='/subject/:subjectId' component={SubjectContainer} />
				<Route path='/article/:articleId' component={ArticleContainer} />
			</Route>
			<Route path='/login' component={LoginContainer} onEnter={chechLogin} />
		</Router>
	)
}

export default configureRoutes