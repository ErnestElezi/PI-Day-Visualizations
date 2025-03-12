import { can } from '../../brush/brush.js';
import { Color } from '../../color/color.js';
import { palette } from '../../color/color_constants.js';
import { vector } from '../../vector/vector.js';
import { PI_100K } from '../PI.js';

const origin = new vector(can.canvas_element.width / 2, can.canvas_element.height / 2);

let position = new vector();

const segmentLength = 20;
const increment = (Math.PI * 2) / 10;

function getOffset(digitString) {
	if (digitString === ' ') {
		return new vector();
	}
	let digit = parseInt(digitString);
	let angle = digit * increment;

	return new vector().setByAngle(angle, segmentLength);
}

let counter = 0;

function drawSegment() {
	if (counter == 0 && counter < PI_100K.length) {
		counter++;
		return;
	}

	let offset = getOffset(PI_100K[counter]);

	let newPosition = position.copy().addV(offset);
	if (!newPosition.within_range(origin.copy().scale(-1, -1), origin.copy())) {
		position.scale(-1,-1)
	}

	can.strokeLineV(position.copy(), position.addV(offset), palette[counter % palette.length], 2);

	counter++;
}

addEventListener('keypress', (e) => {
	batch++;
});

let batch = 1;

function loop() {
	requestAnimationFrame(loop);

	can.save();
	can.translateV(origin);

	can.fillRectV(origin.copy().scale(-1,-1),origin.copy().scale(2,2),new Color().set_a(0.01 ))

	for (let i = 0; i < batch; i++) {
		drawSegment();
	}

	can.restore();
}

loop();

function cl() {
	can.save();
	can.translateV(origin);
	can.c.clearRect(-origin.x, -origin.y, origin.x * 2, origin.x * 2);
	can.restore();
}

addEventListener('keypress', (e) => {
	switch (e.key) {
		// Reset
		case 'r':
			position = new vector
			counter = 1;
			batch = 0;
			cl();
			break;

		// Start
		case ' ':
			batch = 100;
			break;

		// Step One
		case 'w':
			break;
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
			batch = (parseInt(e.key)) ** 2;
			break;
		case 'p':
			batch = 0;
			break;
	}
});

