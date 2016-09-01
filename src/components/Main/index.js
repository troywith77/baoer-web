import React, { Component } from 'react'
import classes from './style.scss'
import Header from 'components/Header'
import AsideTopicList from 'components/AsideTopicList'

class Main extends Component {
	fetchData(obj) {
		const subjectId = obj.params.subjectId || null
		obj.actions.fetchSubjectsList().then(res => {
			!subjectId && obj.actions.fetchSingleSubject(res[0].Id)
			!subjectId && obj.actions.fetchSubjectArticles(res[0].Id)
		})
		subjectId && obj.actions.fetchSingleSubject(subjectId)
		subjectId && obj.actions.fetchSubjectArticles(subjectId)
	}
	componentWillReceiveProps(nextProp) {
		if(this.props.params.subjectId !== nextProp.params.subjectId) {
			nextProp.actions.CHANGE_SUBJECT()
			this.fetchData(nextProp)
		}
	}
	componentDidMount() {
		this.fetchData(this.props)
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