import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from 'reducer'


export default function configureStore() {

	const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

	let store = createStoreWithMiddleware(reducer)

	return store

}