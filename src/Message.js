import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
	render() {
		const { hits, missed } = this.props;

		let rate;
		if (hits > 0 || missed > 0) {
			rate = (hits / (hits + missed)).toFixed(2) * 100;
		}

		return (
			<div className="stats">
				<p>
					Hits: <span>{this.props.hits}</span>
				</p>
				<hr />
				<p>
					Missed: <span>{this.props.missed}</span>
				</p>
				<hr />
				<p>
					Rate: <span>{rate}%</span>
				</p>
			</div>
		);
	}
}

export default Message;
