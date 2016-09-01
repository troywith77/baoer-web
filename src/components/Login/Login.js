import React, { Component } from 'react'
import classes from './Login.scss'
import EmailLoginItem from './EmailLoginItem'

class Login extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      method: null
    }
    this.onLogin = this.onLogin.bind(this)
  }
  onLogin(data) {
    this.props.actions.loginRequest(data)
    	.then(() => this.context.router.push('/'))
  }
  render() {
  	console.log(this.props)
    return (
      <div className={classes.container}>
        <div className={classes.wrap}>
          <header className={classes.logo}>
            <svg width="102" height="102" viewBox="0 0 58 58">
            	<path d="M20.47 48.755l2.874 2.874c3.12 3.12 8.188 3.12 11.312 0l2.873-2.876c-.26-.203-.513-.424-.753-.663-.24-.24-.46-.49-.663-.75l-2.87 2.868c-2.344 2.345-6.138 2.353-8.49 0l-2.87-2.87c-.203.262-.424.512-.663.752-.24.24-.49.46-.75.663zM9.246 37.53L6.37 34.655c-3.122-3.124-3.12-8.19 0-11.312l2.875-2.873c.203.26.424.512.663.752.24.24.49.46.75.663l-2.867 2.87c-2.352 2.352-2.344 6.146 0 8.49l2.87 2.87c-.26.203-.51.424-.75.663-.24.24-.46.49-.664.75zm39.51-17.06l2.874 2.874c3.122 3.124 3.12 8.19 0 11.312l-2.875 2.873c-.203-.26-.424-.513-.663-.753-.24-.24-.49-.46-.75-.663l2.867-2.87c2.352-2.352 2.344-6.146 0-8.49l-2.87-2.87c.26-.203.51-.424.75-.663.24-.24.46-.49.664-.75zM37.53 9.246L34.655 6.37c-3.12-3.12-8.188-3.122-11.312 0L20.47 9.246c.26.203.512.424.752.663.24.24.46.49.663.75l2.87-2.868c2.344-2.345 6.138-2.353 8.49 0l2.87 2.87c.203-.262.424-.512.663-.752.24-.24.49-.46.75-.663z" fill="#333"></path><path d="M9.08 15.565c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#FE5442"></path><path d="M35.95 42.435c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#15CC87"></path><path d="M35.95 15.565c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#333"></path><path d="M9.08 42.435c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#FCD007"></path>
            </svg>
            <p>XGB</p>
          </header>
          {
            !this.state.method &&
            <div>
              <section className={classes.loginItems}>
                <button
                  className={classes.loginWechat}
                  onClick={e => this.setState({method: 'wechat'})}
                >
                  <svg width="18" height="14" viewBox="0 0 18 14"><path fill="#333" d="M7.64 10.615c-.38.057-.77.087-1.17.087-.8 0-1.564-.12-2.27-.338-.354-.11-1.65 1.19-1.973 1.033-.192-.094.58-1.63.4-1.74C1.033 8.682 0 7.117 0 5.35 0 2.397 2.896 0 6.47 0c3.367 0 6.135 2.13 6.44 4.85C15.743 4.958 18 6.835 18 9.135c0 1.428-.87 2.694-2.21 3.473-.25.147.547 1.384.265 1.494-.175.07-1.42-.978-1.605-.926-.56.16-1.164.248-1.794.248-2.302 0-4.265-1.17-5.016-2.807zm-.296-1.012c-.285.037-.577.057-.875.057-.748 0-1.46-.123-2.104-.345-.064-.022-.293-.088-.417 0-.28.2-.654.61-.654.61s.136-.3.182-.737c.02-.2-.3-.34-.363-.382-1.213-.786-1.99-2.086-1.99-3.438 0-2.37 2.392-4.29 5.344-4.29 2.753 0 5.022 1.674 5.31 3.825-2.535.335-4.468 2.102-4.468 4.23 0 .16.01.316.03.47zM4.22 4.308c.465 0 .843-.362.843-.808 0-.446-.378-.808-.844-.808-.468 0-.846.362-.846.808 0 .446.378.808.844.808zm4.5 0c.465 0 .842-.362.842-.808 0-.446-.377-.808-.843-.808-.468 0-.846.362-.846.808 0 .446.378.808.844.808zm1.967 3.77c.31 0 .563-.242.563-.54 0-.297-.252-.538-.563-.538-.31 0-.562.24-.562.538 0 .298.252.54.563.54zm3.376 0c.31 0 .562-.242.562-.54 0-.297-.252-.538-.563-.538-.31 0-.562.24-.562.538 0 .298.252.54.563.54z"></path></svg>
                  <span>Login With WeChat</span>
                </button>
                <button
                  className={classes.loginEmail}
                  onClick={e => this.setState({method: 'email'})}
                >
                  <span>Login With Email</span>
                </button>
              </section>
              <p className={classes.protocol}>We will not use your social account to publish any information.</p>
            </div>
          }
          {
            this.state.method === 'email' && <EmailLoginItem Login={this.onLogin} />
          }
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login