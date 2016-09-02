import React, { Component } from 'react'
import classes from './style.scss'
import SubjectHeader from './SubjectHeader/'
import SubjectList from './SubjectList/'

class Subject extends Component {
	componentWillReceiveProps(nextProps) {
		const subjectId = nextProps.params.subjectId || null
		if(this.props.params.subjectId != subjectId) {
			nextProps.actions.fetchSingleSubject(subjectId)
			nextProps.actions.fetchSubjectArticles(subjectId)
		}
	}
	componentDidMount() {
		const { actions, Subject } = this.props
		const subjectId = this.props.params.subjectId || null
		if(subjectId) {
			if(Subject.currentSubject.Id) return
			actions.fetchSingleSubject(subjectId)
			actions.fetchSubjectArticles(subjectId)
		} else {
			actions.fetchAsideSubjectsList().then(res => {
				actions.fetchSingleSubject(res[0].Id)
				actions.fetchSubjectArticles(res[0].Id)
			})
		}
	}
	render() {
		return (
			<div className={classes.subjectContainer}>
				<section className={classes.subjectListContainer}>
					<SubjectHeader subject={this.props.Subject.currentSubject} />
					<SubjectList
						subject={this.props.Subject.currentSubject}
						list={this.props.Subject.subjectList}
						{...this.props.actions}
					/>
				</section>
			</div>
		)
	}
}

export default Subject