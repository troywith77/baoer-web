export const EMAIL_LOGIN = (payload) => {
	console.log(payload)
	return fetch('http://test.bao.wallstreetcn.com:3000/api/account/mobile_login', {
		method: 'post',
		body: JSON.stringify(payload)
	})
		.then(res => res.json())
}