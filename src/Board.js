import React, { Component } from 'react';
import Message from './Message';
import Feedback from './Feedback';
import { icons, mixIt } from './icons';
import './Board.css';

class Board extends Component {
	static defaultProps = {
		icons: icons,
		numIcons: 9
	};

	constructor(props) {
		super(props);
		this.state = {
			matcher: '',
			isFound: 'initial',
			timeStart: Math.floor(Date.now() / 1000),
			timeEnd: '',
			timeEndCorrect: [],
			hits: 0,
			missed: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	random() {
		return Math.floor(Math.random() * this.props.numIcons);
	}

	handleClick(e, matcher) {
		let select = e.currentTarget.value;

		const currentTime = Math.floor(Date.now() / 1000);
		const resultTime = currentTime - this.state.timeStart;

		if (matcher === select) {
			this.setState((prevState) => ({
				matcher: matcher,
				isFound: true,
				timeStart: currentTime,
				timeEndCorrect: [ ...prevState.timeEndCorrect, resultTime ],
				hits: prevState.hits + 1
			}));
		} else {
			this.setState((prevState) => ({
				isFound: false,
				timeStart: currentTime,
				timeEnd: resultTime,
				missed: prevState.missed + 1
			}));
		}
	}

	render() {
		mixIt();

		const arr = [ ...icons ];
		const matcher = arr.shift();
		console.log(matcher);

		const board1 = arr.splice(0, this.props.numIcons - 1);
		board1.splice(this.random(), 0, matcher);

		const first = board1.map((ico) => (
			<button key={ico} value={ico} onClick={(e) => this.handleClick(e, matcher)}>
				<i className={`fas fa-${ico}`} />
			</button>
		));

		const board2 = arr.splice(0, this.props.numIcons - 1);
		board2.splice(this.random(), 0, matcher);

		const second = board2.map((ico) => (
			<button key={ico} value={ico} onClick={(e) => this.handleClick(e, matcher)}>
				<i className={`fas fa-${ico}`} />
			</button>
		));

		return (
			<main className="main">
				<div className="card">{first}</div>
				<Feedback
					isFound={this.state.isFound}
					timeEnd={this.state.timeEnd}
					avgArr={this.state.timeEndCorrect}
				/>
				<div className="card">{second}</div>
				<Message
					hits={this.state.hits}
					missed={this.state.missed}
					avgArr={this.state.timeEndCorrect}
				/>
			</main>
		);
	}
}

export default Board;
