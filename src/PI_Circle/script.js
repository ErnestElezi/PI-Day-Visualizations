import { can } from '../../brush/brush.js';
import { Color } from '../../color/color.js';
import { palette } from '../../color/color_constants.js';
import { vector } from '../../vector/vector.js';
import { PI_100K, PI_1K } from '../PI.js';
const PI = PI_100K;

const origin = new vector(can.canvas_element.width / 2, can.canvas_element.height / 2);
const radius = origin.y * 0.9;

let overuses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const increment = (Math.PI * 2) / 10;
const angleOffset = (increment / PI.length) * 5;
const unitVector = new vector(0, -radius);

function getPointOnCircle(digitString) {
	if (digitString == ' ') {
		return new vector();
	}
	let digit = parseInt(digitString);
	let currentOveruses = overuses[digit];

	let angle = digit * increment + currentOveruses * angleOffset;

	overuses[digit]++;
	return unitVector.copy().rotate(angle);
}

let counter = 1;

function drawWeb() {
	if (counter == 0 || counter > PI.length) {
		counter++;
		return;
	}

	let start = getPointOnCircle(PI[counter - 1]);
	let end = getPointOnCircle(PI[counter]);
	can.beginPath();
	can.setStrokeColor(palette[parseInt(PI[counter - 1]) + 33].set_a(0.5));
	can.setLineWidth(0.5);

	let curvePoint = new vector();

	curvePoint.addV(start);
	curvePoint.addV(end);
	curvePoint.scale(1 / 3, 1 / 3);

	can.c.moveTo(start.x, start.y);
	can.c.bezierCurveTo(curvePoint.x, curvePoint.y, curvePoint.x, curvePoint.y, end.x, end.y);
	can.stroke();

	counter++;
}

can.c.textAlign = 'center';
can.c.textBaseline = 'middle';
can.c.font = '50px Arial';
function drawNumbers() {
	let increment = (Math.PI * 2) / 10;
	for (let i = 0; i < 10; i++) {
		let pos = new vector().setByAngle(increment * i - (increment * 5) / 2, radius * 1.1);
		can.c.fillStyle = 'White';
		can.c.fillText(i, pos.x, pos.y);
	}
}

let batch = 0;

function loop() {
	requestAnimationFrame(loop);
	can.save();
	can.translateV(origin);
	drawNumbers();
	can.strokeCircleV(new vector(), radius, new Color(150, 150, 150), 2);
	can.restore();

	can.save();
	can.translateV(origin);
	for (let i = 0; i < batch; i++) {
		drawWeb();
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
			counter = 1;
			batch = 0;
			cl();
			overuses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			console.log(overuses[0]);

			break;

		// Start
		case ' ':
			batch = 100;
			break;

		// Step One
		case 'w':
			can.save();
			can.translateV(origin);
			drawWeb();
			can.restore();
			break;
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
			batch = (parseInt(e.key) * 5) ** 2;
			break;
		case 'p':
			batch = 0;
			break;
	}
});
