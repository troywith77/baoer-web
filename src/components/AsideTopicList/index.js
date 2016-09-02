import React, { Component } from 'react'
import classes from './style.scss'
import { Link, IndexLink } from 'react-router'
import cx from 'classnames'

class AsideTopicList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeKey: 0
		}
	}
	render() {
		const items = this.props.list.map((item, index) => {
			const active = cx(
				classes.listItem, {
					[classes.activeItem]: this.props.activeKey ? this.props.activeKey == item.Id : index === this.state.activeKey
				}
			)
			return (
				<Link
					key={index}
					to={`/subject/${item.Id}`}
					className={active}
					onClick={e => this.setState({activeKey: index})}
				>
					<img src={item.Image} />
					<span>{item.Title}</span>
				</Link>
			)
		})
		return (
			<ul>
				{items}
			</ul>
		)
	}
}

export default AsideTopicList