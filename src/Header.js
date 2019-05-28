import React from 'react';
import './Header.css';

export default function Header() {
	return (
		<header>
			<h1>
				<span>Re</span>Dobble
			</h1>
			<h2>
				There is only{' '}
				<span>
					<u>one</u>
				</span>{' '}
				match between{' '}
				<span>
					<u>both</u>
				</span>{' '}
				boards!
			</h2>
		</header>
	);
}
