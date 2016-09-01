import React, { Component } from 'react'
import classes from './style.scss'
import SubjectHeader from './SubjectHeader/'
import SubjectList from './SubjectList/'

class Subject extends Component {
	render() {
		return (
			<div className={classes.subjectContainer}>
				<section className={classes.subjectListContainer}>
					<SubjectHeader
						subject={this.props.Subject.currentSubject}
					/>
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