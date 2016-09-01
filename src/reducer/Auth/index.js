const Auth = ( state = {}, action ) => {
	switch(action.type) {
		case 'LOGIN_SUCCSED':
			return Object.assign({}, {
				Token: action.payload.Token,
				Nickname: action.payload.UserInfo.Nickname
			})
			break
		case 'LOGOUT':
			return state
		default:
			return state
	}
}

export default Auth