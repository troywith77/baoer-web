import cookie from 'react-cookie'

export const loginRequest = (payload) => {
	return dispatch => {
		return fetch('http://test.bao.wallstreetcn.com:3000/api/account/mobile_login', {
			method: 'post',
			body: JSON.stringify(payload)
		}).then(res => res.json())
			.then((res) => {
				dispatch(LOGIN_SUCCSED(res))
				cookie.save('Token', res.Token, { path: '/', maxAge: '259200' })
				cookie.save('Nickname', res.UserInfo.Nickname, { path: '/', maxAge: '259200' });
			})
		}
}

export const LOGIN_SUCCSED = (payload) => ({
	type: 'LOGIN_SUCCSED',
	payload
})