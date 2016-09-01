import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from 'components/Login'
import Actions from 'actions'

const mapStateToProps = state => {
	return {
		Auth: state.Auth
	}
}

const mapActionsToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Login)