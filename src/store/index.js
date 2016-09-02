import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from 'reducer'

export default function configureStore() {

	const createStoreWithMiddleware = applyMiddleware(
		thunk,
		createLogger()
	)(createStore)

	let store = createStoreWithMiddleware(reducer)

	return store

}