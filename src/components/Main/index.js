import React, { Component } from 'react'
import classes from './style.scss'
import Header from 'components/Header'
import AsideTopicList from 'components/AsideTopicList'

class Main extends Component {
	componentDidMount() {
		this.props.actions.fetchAsideSubjectsList()
	}
	render() {
		return (
			<div>
				<Header />
				<div className={classes.Main}>
					<aside className={classes.asideList}>
						<AsideTopicList
							list={this.props.Subject.asideList}
							activeKey={this.props.params.subjectId}
						/>
					</aside>

					{this.props.children}
				</div>
			</div>
		)
	}
}

Main.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default Main