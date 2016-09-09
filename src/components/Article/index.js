import React, { Component } from 'react'
import classes from './style.scss'
import AsideTopicList from 'components/AsideTopicList'
import AsideTopicSummary from 'components/AsideTopicSummary'
import { formatTime } from 'utils'

class Article extends Component {
	constructor(props) {
		super(props)
	}
	renderArticle() {

	}
	componentDidMount() {
		window.scroll(0, 0)
		const { Article } = this.props
		console.log(Article.selectedArticle)
		this.props.actions.fetchArticle(this.props.params.articleId)
	}
	render() {
		const { Article } = this.props
		return (
			<div className={classes.ArticleContainer}>
				<div className={classes.ArticleInner}>
					<header className={classes.author}>
						<p>
							{Article.selectedArticle.DisplayAuthor}
							{Article.selectedArticle.Source && <small className={classes.source}>{'@' + Article.selectedArticle.Source}</small>}
						</p>
					</header>
					<h3 className={classes.title}>{Article.selectedArticle.Title}</h3>
					<p dangerouslySetInnerHTML={{__html: Article.selectedArticle.Content}}></p>
					{ Article.selectedArticle.CreatedAt && <footer className={classes.articleFooter}>{formatTime(Article.selectedArticle.CreatedAt * 1000, '-')}</footer>}
				</div>
				<aside className={classes.asideTopic}>
					<AsideTopicSummary
						subject={Article.selectedSubject}
					/>
				</aside>
			</div>
		)
	}
}

export default Article