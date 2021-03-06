import React, { Component } from 'react'
import classes from './Header.scss'
import { Link } from 'react-router'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.handleMenu = this.handleMenu.bind(this)
  }
  handleMenu(e) {
    if(e.target.getAttribute('class') != classes.profile) {
      this.setState({ showMenu: false })
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleMenu)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleMenu)
  }
  render() {
    return (
      <div>
        <div className={classes.mainHeader}>
          <div className={classes.tags}>
            <Link to='/'>
              <span className={classes.square}></span>
              <span className={classes.tag}>Tags</span>
            </Link>
          </div>
          <div className={classes.logo}>
            <Link to='/'>
              <svg viewBox="0 0 58 58" width="24" height="24"><path d="M20.47 48.755l2.874 2.874c3.12 3.12 8.188 3.12 11.312 0l2.873-2.876c-.26-.203-.513-.424-.753-.663-.24-.24-.46-.49-.663-.75l-2.87 2.868c-2.344 2.345-6.138 2.353-8.49 0l-2.87-2.87c-.203.262-.424.512-.663.752-.24.24-.49.46-.75.663zM9.246 37.53L6.37 34.655c-3.122-3.124-3.12-8.19 0-11.312l2.875-2.873c.203.26.424.512.663.752.24.24.49.46.75.663l-2.867 2.87c-2.352 2.352-2.344 6.146 0 8.49l2.87 2.87c-.26.203-.51.424-.75.663-.24.24-.46.49-.664.75zm39.51-17.06l2.874 2.874c3.122 3.124 3.12 8.19 0 11.312l-2.875 2.873c-.203-.26-.424-.513-.663-.753-.24-.24-.49-.46-.75-.663l2.867-2.87c2.352-2.352 2.344-6.146 0-8.49l-2.87-2.87c.26-.203.51-.424.75-.663.24-.24.46-.49.664-.75zM37.53 9.246L34.655 6.37c-3.12-3.12-8.188-3.122-11.312 0L20.47 9.246c.26.203.512.424.752.663.24.24.46.49.663.75l2.87-2.868c2.344-2.345 6.138-2.353 8.49 0l2.87 2.87c.203-.262.424-.512.663-.752.24-.24.49-.46.75-.663z" fill="#333"></path><path d="M9.08 15.565c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#FE5442"></path><path d="M35.95 42.435c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#15CC87"></path><path d="M35.95 15.565c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#333"></path><path d="M9.08 42.435c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z" fill="#FCD007"></path></svg>
            </Link>
          </div>
          <div className={classes.info}>
            <div className={classes.profile} onClick={e => this.setState({showMenu: !this.state.showMenu})}>
              <div className={classes.innerMenu} style={{display: this.state.showMenu ? 'block' : 'none'}}>
                <Link to='/'>Profile</Link>
                <Link to='/login' onClick={e => this.props.actions.logout()}>Log out</Link>
              </div>
            </div>
            <Link className={classes.notification} to='/login'>
              <svg viewBox="0 0 14 16" width="14" height="16">
                <path d="M6.16.844c-.252.253-.788.722-1.66 1.156-1.276.635-2.106 1.537-2.5 3.5-.34 1.52-.182 2.548-.5 3.5-.358 1.067-.95 1.26-.95 1.26-.857.685-.692 1.508.352 1.832l.144.045c3.307 1.03 8.664 1.024 11.967-.013l.082-.025c1.054-.332 1.202-1.14.367-1.865 0 0-.64-.283-.96-1.235-.318-.952-.286-1.933-.5-3.5-.268-1.98-1.466-2.985-2.5-3.5-.828-.412-1.338-.856-1.594-1.116C7.905.394 7.515 0 7.033 0c-.468 0-.85.374-.873.844zM7.01 16c1.442 0 3-1.045 3-1.76 0-.355-1.696-.238-3-.24-1.32-.002-3.013-.05-3.013.308C3.997 15.023 5.565 16 7.01 16z" fill="#1F2322"></path>
              </svg>
            </Link>
          </div>
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default Header
