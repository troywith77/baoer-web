import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from 'actions'
import Main from 'components/Main'

const mapStateToProps = state => {
	return {
		Auth: state.Auth,
		Subject: state.Subject,
	}
}

const mapActionsToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Main)