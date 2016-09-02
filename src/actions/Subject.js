import API from 'api'
import axios from 'axios'

export const fetchAsideSubjectsList = () => {
	return dispatch => {
		return fetch(API.homePageRec.list)
			.then(res => res.json())
			.then(res => {
				dispatch(RECEIVE_ASIDE_SUBJECTS(res))
				return res.Section4
			})
	}
}

export const fetchSingleSubject = (id) => {
	return (dispatch, getStore) => {
		dispatch(REQUEST_SUBJECT())

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
				dispatch(RECEIVE_ARTICLES_LIST(res.data.Messages))
			}
		})
	}
}

export const RECEIVE_ASIDE_SUBJECTS = (payload) => {
	return{
		type: 'RECEIVE_ASIDE_SUBJECTS',
		payload
	}
}

export const RECEIVE_CURRENT_SUBJECT = (payload) => ({
	type: 'RECEIVE_CURRENT_SUBJECT',
	payload
})

export const RECEIVE_ARTICLES_LIST = (payload) => ({
	type: 'RECEIVE_ARTICLES_LIST',
	payload
})

export const REQUEST_SUBJECT = () => ({
	type: 'REQUEST_SUBJECT'
})

export const SELECT_ARTICLE = (payload) => ({
	type: 'SELECT_ARTICLE',
	payload
})