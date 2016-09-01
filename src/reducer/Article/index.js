const initialState = {
	selectedArticle: {}
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
			console.log(action.payload)
			return Object.assign({}, state, {
				selectedArticle: action.payload
			})
			break
		default:
			return state
	}
}

export default Subject