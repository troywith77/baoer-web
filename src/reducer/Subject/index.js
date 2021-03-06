const initialState = {
	asideList: [],
	currentSubject: {},
	subjectList: []
}

const Subject = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_ASIDE_SUBJECTS':
			return Object.assign({}, state, {
				asideList: action.payload.Section4
			})
			break
		case 'RECEIVE_CURRENT_SUBJECT':
			return Object.assign({}, state, {
				currentSubject: action.payload
			})
			break
		case 'RECEIVE_ARTICLES_LIST':
			return Object.assign({}, state, {
				subjectList: action.payload
			})
			break
		case 'REQUEST_SUBJECT':
			return Object.assign({}, state, {
				currentSubject: {Id: action.payload},
				subjectList: []
			})
			break
		default:
			return state
	}
}

export default Subject