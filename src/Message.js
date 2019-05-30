import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
	render() {
		const { hits, missed, avgArr } = this.props;

		let averageTime = avgArr.reduce((acc, cur) => {
			return acc + cur;
		}, 0);
		averageTime = (averageTime / avgArr.length).toFixed(1).replace(/\.?0*$/, '');

		let rate;
		if (hits > 0 || missed > 0) {
			rate = (hits / (hits + missed) * 100).toFixed(1).replace(/\.?0*$/, '');
		}

		return (
			<div className="stats">
				<p>
					Hits: <span>{hits}</span>
				</p>
				<p>
					Missed: <span>{missed}</span>
				</p>
				<p>
					Rate: <span>{rate}%</span>
				</p>
				<p>
					Average correct response:{' '}
					<span>{avgArr.length === 0 ? 'n/a' : `${averageTime}s`}</span>
				</p>
			</div>
		);
	}
}

export default Message;
