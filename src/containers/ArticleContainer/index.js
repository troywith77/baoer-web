import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from 'actions'
import Article from 'components/Article'

const mapStateToProps = state => {
	return {
		Auth: state.Auth,
		Subject: state.Subject,
		Article: state.Article
	}
}

const mapActionsToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Article)