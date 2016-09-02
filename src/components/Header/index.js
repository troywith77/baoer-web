import Header from './Header'
import { connect } from 'react-redux'
import Actions from 'actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({

})

const mapActionsToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Header)