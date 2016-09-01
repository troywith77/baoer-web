const initialState = {
	asideList: [],
	currentSubject: {},
	subjectList: []
}

const Subject = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_SUBJECTS':
			return Object.assign({}, state, {
				asideList: action.payload.Section4
			})
			break
		case 'RECEIVE_CURRENT_SUBJECT':
			return Object.assign({}, state, {
				currentSubject: action.payload
			})
			break
		case 'RECEIVE_SUBJECT_LIST':
			return Object.assign({}, state, {
				subjectList: action.payload
			})
			break
		case 'CHANGE_SUBJECT':
			return Object.assign({}, state, {
				currentSubject: {},
				subjectList: []
			})
			break
		default:
			return state
	}
}

export default Subject