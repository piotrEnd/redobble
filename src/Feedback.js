import React, { Component } from 'react';

class Feedback extends Component {
	render() {
		let isFound = {
			fontFamily: 'Fredoka One',
			textTransform: 'uppercase',
			color: '#f44336'
		};

		if (this.props.isFound) {
			isFound.color = ' #61dafb';
		}

		if (this.props.isFound === 'initial') {
			return null;
		} else {
			return (
				<div style={{ lineHeight: '0' }}>
					<h2 style={isFound}>{this.props.isFound ? 'nicely done' : 'bad deal'}</h2>
					<p>
						{this.props.isFound ? 'in ' : 'took '}
						{this.props.timeEnd > 1 ? (
							`${this.props.timeEnd} seconds`
						) : (
							`${this.props.timeEnd} second`
						)}
					</p>
				</div>
			);
		}
	}
}

export default Feedback;
