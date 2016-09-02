import cookie from 'react-cookie'

export const loginRequest = (payload) => {
	return dispatch => {
		dispatch(REQUEST_LOGIN())

		return fetch('http://test.bao.wallstreetcn.com:3000/api/account/mobile_login', {
			method: 'post',
			body: JSON.stringify(payload)
		}).then(res => res.json())
			.then((res) => {
				dispatch(LOGIN_SUCCSED(res))
				cookie.save('Token', res.Token, { path: '/', maxAge: '259200' })
				cookie.save('Nickname', res.UserInfo.Nickname, { path: '/', maxAge: '259200' });
			})
			.catch(err => {
				console.log(err)
				dispatch(LOGIN_FAILED())
			})
		}
}

export const logout = () => {
	return dispatch => {
		console.log(cookie.load('Token'))
		cookie.remove('Token')
		cookie.remove('Nickname')
		// location.replace('/')
		dispatch(LOG_OUT())
	}
}

export const REQUEST_LOGIN = () => ({
	type: 'REQUEST_LOGIN'
})

export const LOGIN_SUCCSED = (payload) => ({
	type: 'LOGIN_SUCCSED',
	payload
})

export const LOGIN_FAILED = () => ({
	type: 'LOGIN_FAILED'
})

export const LOG_OUT = () => ({
	type: 'LOG_OUT'
})