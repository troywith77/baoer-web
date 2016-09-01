import React, { Component } from 'react'
import classes from './EmailLoginItem.scss'

export default class EmailLogin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			account: '',
			password: ''
		}
		this.handleLogin = this.handleLogin.bind(this)
	}
	handleLogin() {
		const data = {
			Mobile: this.state.account,
			Password: this.state.password,
			Role: 200
		}
		this.props.Login(data)
	}
	render() {
		return (
			<form className={classes.emailLogin} onSubmit={e => e.preventDefault()}>
	      <input
	        type='text'
	        placeholder='Account'
	        autoFocus
	        value={this.state.account}
	        className={classes.Account}
	        onChange={e => this.setState({account: e.target.value})}
	      />
	      <input
	        type='text'
	        placeholder='Password'
	        value={this.state.password}
	        className={classes.Password}
	        onChange={e => this.setState({password: e.target.value})}
	      />
	      <p className={classes.lostPassword}>
	        <a href>Lost your password?</a>
	      </p>
	      {/*<p className={classes.back}>
	        <a href>Back</a>
	      </p>*/}
	      <button
	      	type='submit'
	      	className={classes.emailLoginButton}
	      	onClick={this.handleLogin}
	      >
	        Login
	      </button>
	    </form>
		)
	}
}