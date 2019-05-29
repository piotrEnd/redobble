import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
	render() {
		const { isFound, timeEnd } = this.props;

		if (isFound === 'initial') {
			return null;
		} else {
			return (
				<div style={{ lineHeight: '0' }}>
					<h2 className={`feedback ${isFound ? 'correct' : 'wrong'}`}>
						{isFound ? 'nicely done' : 'bad deal'}
					</h2>
					<p>
						{isFound ? 'in ' : 'took '}
						{timeEnd > 1 ? `${timeEnd} seconds` : `${timeEnd} second`}
					</p>
				</div>
			);
		}
	}
}

export default Feedback;
