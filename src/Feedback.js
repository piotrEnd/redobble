import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
	render() {
		const { isFound, timeEnd, avgArr } = this.props;

		if (isFound === 'initial') {
			return null;
		} else {
			return (
				<div style={{ lineHeight: '0' }}>
					<h2 className={`feedback ${isFound ? 'correct' : 'wrong'}`}>
						{isFound ? 'nicely done' : 'bad deal'}
					</h2>
					<p>
						{' '}
						&#8943; {isFound ? `in  ${avgArr[avgArr.length - 1]}s` : `took ${timeEnd}s`}{' '}
						&#8943;
					</p>
				</div>
			);
		}
	}
}

export default Feedback;
