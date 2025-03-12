import { can } from '../../brush/brush.js';
import { Color } from '../../color/color.js';
import { palette } from '../../color/color_constants.js';
import { vector } from '../../vector/vector.js';
import { PI_100K, PI_1K } from '../PI.js';
const PI = PI_100K;

let branches = [];
const branchLength = 40;
const origin = new vector(can.canvas_element.width / 2, can.canvas_element.height);

let age = 0;

let count = 0;

function getNextDigit() {
	let digit = parseInt(PI[count]);
	count++;
	return digit;
}

class Node {
	constructor(branches, position = new vector(), parentAngle = 0) {
		this.branches = branches;
		this.position = position;
		this.parentAngle = parentAngle;
		this.alive = true;
	}

	generateBranches() {
		let newBranches = [];

		let increment = Math.PI / this.branches;

		for (let i = 0; i < this.branches; i++) {
			let digit = getNextDigit();
			let angle = increment * i + Math.PI + Math.PI / 8 + increment / 3;
			let offset = new vector().setByAngle(angle, digit * 20 + 100);
			let newPosition = this.position.copy().addV(offset);
			newBranches.push(new Node(digit, newPosition, angle));

			let curvePoint = this.position.copy().addV(new vector(offset.x * 0.8, offset.y * 0.2));

			can.beginPath();
			can.setStrokeColor(palette[this.branches]);
			can.setLineWidth(35 - age * 8);
			can.moveToV(this.position.copy());
			can.c.bezierCurveTo(curvePoint.x, curvePoint.y, curvePoint.x, curvePoint.y, newPosition.x, newPosition.y);
			can.stroke();
		}
		this.alive = false;

		return newBranches;
	}
}

function updateBranches() {
	let newBranches = [];
	for (let i = 0; i < branches.length; i++) {
		const branch = branches[i];

		if (!branch.alive) {
			branches.splice(i, 1);
			i--;
		}

		newBranches = newBranches.concat(branch.generateBranches());
	}
	return newBranches;
}

branches.push(new Node(getNextDigit(), new vector(), 0));

addEventListener('keypress', (e) => {
	can.save();
	can.translateV(origin);
	if (e.key === ' ') {
		branches = updateBranches();
		age++;
	} else if (e.key === 'a') {
		for (const n of branches) {
			console.log('called');

			can.fillCircleV(n.position.copy(), 10 * n.branches, palette[n.branches + 72].set_a(0.9));
		}
	}
	can.restore();
});
