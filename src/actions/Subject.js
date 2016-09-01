import API from 'api'
import axios from 'axios'

export const fetchSubjectsList = () => {
	return dispatch => {
		return fetch(API.homePageRec.list)
			.then(res => res.json())
			.then(res => {
				dispatch(RECEIVE_SUBJECTS(res))
				return res.Section4
			})
	}
}

export const RECEIVE_SUBJECTS = (payload) => {
	return{
		type: 'RECEIVE_SUBJECTS',
		payload
	}
}

export const fetchSingleSubject = (id) => {
	return (dispatch, getStore) => {
		return fetch(API.topic.single + id, {
			method: 'get',
			headers: {
				'X-Appgo-Token': getStore().Auth.Token
			}
		})
			.then(res => res.json())
			.then(res => {
				dispatch(RECEIVE_CURRENT_SUBJECT(res))
			})
	}
}

export const RECEIVE_CURRENT_SUBJECT = (payload) => ({
	type: 'RECEIVE_CURRENT_SUBJECT',
	payload
})

export const fetchSubjectArticles = (id) => {
	return (dispatch, getStore) => {
		return axios(API.article.list, {
			method: 'get',
			headers: {
				'X-Appgo-Token': getStore().Auth.Token
			},
			params: {
				limit: 10,
				page: 1,
				subjectid: id
			}
		})
		.then(res => {
			if(id == getStore().Subject.currentSubject.Id) {
				dispatch(RECEIVE_SUBJECT_LIST(res.data.Messages))
			}
		})
	}
}

export const RECEIVE_SUBJECT_LIST = (payload) => ({
	type: 'RECEIVE_SUBJECT_LIST',
	payload
})

export const CHANGE_SUBJECT = (payload) => ({
	type: 'CHANGE_SUBJECT',
	payload
})

export const SELECT_ARTICLE = (payload) => ({
	type: 'SELECT_ARTICLE',
	payload
})