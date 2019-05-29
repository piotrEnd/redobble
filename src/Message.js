import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
	render() {
		const { hits, missed } = this.props;

		let rate;
		if (hits > 0 || missed > 0) {
			rate = Math.round((hits / (hits + missed)).toFixed(2) * 100);
			console.log(typeof rate);
		}

		return (
			<div className="stats">
				<p>
					Hits: <span>{hits}</span>
				</p>
				<hr />
				<p>
					Missed: <span>{missed}</span>
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
