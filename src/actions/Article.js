import API from 'api'

export const fetchArticle = (id) => {
	return (dispatch, getStore) => {
		if(id != getStore().Article.selectedArticle.Id) {
			dispatch(REQUEST_ARTICLE())

			return fetch(API.article.single + id, {
				method: 'get',
				headers: {
					'X-Appgo-Token': getStore().Auth.Token
				}
			})
				.then(res => res.json())
				.then(res => {
					dispatch(RECEIVE_ARTICLE(res))
				})
		}
	}
}

export const REQUEST_ARTICLE = () => ({
	type: 'REQUEST_ARTICLE'
})

export const RECEIVE_ARTICLE = (payload) => ({
	type: 'RECEIVE_ARTICLE',
	payload
})