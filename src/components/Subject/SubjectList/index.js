import React, { Component } from 'react'
import classes from './SubjectList.scss'
import { Link } from 'react-router'
import { formatTimeWithSymbol } from 'utils'

class SubjectList extends Component {
	render() {
		const { list, subject } = this.props
		const items = list.map((item, index) => {
			const createdAt = formatTimeWithSymbol(new Date(item.CreatedAt * 1000), '-')
			const link = item.Style === 2 ? `/${subject.Id}/${item.Id}` : item.OriginalUrl
			const inner = (
				<div>
					<p className={classes.source}>{item.Source} <small>{createdAt}</small></p>
					<p className={classes.title}>{item.Title}</p>
					{
						item.Image && <p className={classes.image}><img src={item.Image} width={120} height={120} /></p>
					}
					<p className={classes.upvote}>
						<svg viewBox="0 0 16 16" width="16" height="16">
						  <path d="M11.793 15.79c.916.548 1.82-.037 1.625-1.088l-1.118-4.34 3.307-3.32c.745-.736.38-1.525-.662-1.657l-4.3-.332L8.994.74c-.426-.987-1.56-.986-1.984 0L5.354 5.054l-4.3.332c-1.04.132-1.41.918-.66 1.658l3.307 3.318-1.117 4.342c-.196 1.053.71 1.636 1.625 1.088l3.792-2.177 3.79 2.177z" fill="#ddd"></path>
						</svg>
						<span className={classes.upvoteCount}>{item.LikeCount}</span>
					</p>
				</div>
			)
			return (
				<li
					key={index}
				  className={classes.subjectListItem}
				  onClick={e => this.props.selectSingleArticle(item)}
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