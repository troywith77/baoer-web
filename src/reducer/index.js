import { combineReducers } from 'redux'
import Auth from './Auth'
import Subject from './Subject'
import Article from './Article'

const rootReducer = combineReducers({
	Auth,
	Subject,
	Article
})

export default rootReducer