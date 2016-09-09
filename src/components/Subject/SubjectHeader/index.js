import React, { Component } from 'react'
import classes from './SubjectHeader.scss'

const SubjectHeader = ({
	subject
}) => (
	<section>
		{
			subject.Title &&
			<header
				style={{backgroundImage: `url(${subject.Image})`}}
				className={classes.listHeader}
			>
				<div className={classes.listHeaderInner}>
					<div className={classes.subjectDetail}>
						<img src={subject.Image} width="96" height="96" />
						<p>{subject.Title}</p>
					</div>
					<div className={classes.follows}>
						<svg viewBox="0 0 14 12" width="14" height="12"><path d="M8.62.653C8.884.55 9.168.5 9.458.5c1.15 0 2.222.828 2.222 2.408 0 1.034-.542 2.07-.847 2.365-.503 1.088 0 1.136 0 1.136 1.163.59 2.567 1.426 2.54 2.283.027.224 0 .09 0 .312 0 .788-.963 1.203-2.187 1.382.004-.06.006-.12.006-.18.024-.184.02-.282-.008-.51l.007.17c.045-1.412-1.01-2.355-3.07-3.473.075-.035.23-.147.2-.46.453-.834.757-2.163.757-3.234 0-.803-.164-1.49-.456-2.047zm-1.7 5.074c.357-.353.99-1.597.99-2.838C7.91.993 6.66 0 5.315 0 3.958 0 2.723.993 2.723 2.89c0 1.252.667 2.494.988 2.837.637 1.21 0 1.364 0 1.364C2.378 7.823.748 8.834.748 9.83v.376C.747 11.566 3.135 12 5.345 12c2.214 0 4.54-.434 4.54-1.794 0-.268.03-.105 0-.375.03-1.027-1.606-2.03-2.964-2.74 0 0-.585-.057 0-1.363z" fill="#FFF" fillOpacity=".8"></path></svg>
						<span className={classes.followerCount}>{subject.FollowerCount}</span>
					</div>
				</div>
			</header>
		}
	</section>
)

export default SubjectHeader