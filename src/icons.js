const icons = [
	'anchor',
	'baby',
	'bomb',
	'bone',
	'bus',
	'carrot',
	'cat',
	'chess-knight',
	'cocktail',
	'couch',
	'crow',
	'dragon',
	'user-md',
	'frog',
	'gem',
	'guitar',
	'spider',
	'globe-europe',
	'futbol',
	'fish',
	'user-astronaut',
	'truck-monster',
	'coffee',
	'snowman',
	'fist-raised',
	'meteor',
	'camera-retro',
	'user-secret',
	'save'
];

function mixIt() {
	for (var i = icons.length - 1; i >= 0; i--) {
		var randomIndex = Math.floor(Math.random() * (i + 1));
		var itemAtIndex = icons[randomIndex];

		icons[randomIndex] = icons[i];
		icons[i] = itemAtIndex;
	}
	return icons;
}

export { icons, mixIt };
