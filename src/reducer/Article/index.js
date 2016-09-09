const initialState = {
	selectedArticle: {},
	selectedSubject: {}
}

const Subject = (state = initialState, action) => {
	switch(action.type) {
		case 'SELECT_ARTICLE':
			return Object.assign({}, state, {
				selectedArticle: action.payload
			})
			break
		case 'REQUEST_ARTICLE':
			return Object.assign({}, state, {
				loadingArticle: true
			})
			break
		case 'RECEIVE_ARTICLE':
			return Object.assign({}, state, {
				selectedArticle: action.payload,
				loadingArticle: false
			})
			break
		case 'SELECT_ARTICLE_SUBJECT':
			return Object.assign({}, state, {
				selectedSubject: action.payload
			})
			break
		default:
			return state
	}
}

export default Subject