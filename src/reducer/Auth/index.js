import cookie from 'react-cookie'

const initialState = {
	isFetching: false,
	isAuthenticated: cookie.load('Token') ? true : false,
	Token: cookie.load('Token'),
	UserInfo: {
		Nickname: cookie.load('Nickname')
	}
}

const Auth = ( state = initialState, action ) => {
	switch(action.type) {
		case 'REQUEST_LOGIN':
			return Object.assign({}, {
				isFetching: true,
				isAuthenticated: false
			})
			break
		case 'LOGIN_SUCCSED':
			return Object.assign({}, {
				Token: action.payload.Token,
				Nickname: action.payload.UserInfo.Nickname,
				isFetching: false,
				isAuthenticated: true
			})
			break
		case 'LOGIN_FAILED':
			return Object.assign({}, {
				isFetching: false,
				isAuthenticated: false
			})
			break
		case 'LOG_OUT':
			return Object.assign({}, {
				isAuthenticated: false,
				Token: null,
				UserInfo: {
					Nickname: null
				}
			})
			break
		default:
			return state
	}
}

export default Auth