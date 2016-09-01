import React, { Component } from 'react'
import classes from './SubjectList.scss'
import { Link } from 'react-router'
import { formatTimeWithSymbol } from 'utils'

class SubjectList extends Component {
	render() {
		const { list, subject } = this.props
		const items = list.map((item, index) => {
			const createdAt = formatTimeWithSymbol(new Date(item.CreatedAt * 1000), '-')
			const link = item.Style === 2 ? `/article/${item.Id}` : item.OriginalUrl
			const inner = (
				<div>
					<p className={classes.source}>{item.Source} <small>{createdAt}</small></p>
					<p className={classes.title}>{item.Title}</p>
					{
						item.Image && <p className={classes.image}><img src={item.Image} width={120} height={120} /></p>
					}
					<p className={classes.upvote}>
						<svg viewBox="0 0 16 16"width="16" height="16">
						  <path d="M16 7.017c0-.74-.592-1.34-1.334-1.34h.58c-.736 0-1.38.592-1.436 1.33l-.49 6.356c-.057.735.488 1.402 1.223 1.49l.13.016c.733.087 1.327-.44 1.327-1.182v-6.67zm-3.13-.672s-2.477-.66-3.827-3.673C8.94 2.44 8.696.482 8.696 0 7.884 0 6.26.163 6.26 2.338c0 .252.155 1.556.697 3.005-.66 0-3.862.247-5.914.668C.57 6.11 0 6.49 0 7.348c.376 3.297 1.54 6.904 2.783 8.015 1.352 1.208 7.73.54 10.434-.668 0-2.416-.347-8.35-.347-8.35z"></path>
						</svg>
						<span className={classes.upvoteCount}>{item.LikeCount}</span>
					</p>
				</div>
			)
			return (
				<li
					key={index}
				  className={classes.subjectListItem}
				  onClick={e => this.props.SELECT_ARTICLE(item)}
				>
					{item.Style === 2 ?
						<Link className={classes.link} to={link}>
							{inner}
						</Link>
						:
						<a href={link} className={classes.link} target='_blank'>
							{inner}
						</a>
					}
				</li>
			)
		})
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

export default SubjectList