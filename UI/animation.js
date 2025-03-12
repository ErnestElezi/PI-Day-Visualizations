import { vector } from '../vector/vector.js';
import { lerp, lerp_vector } from '../vector/vector_math.js';

function easeInSine(x) {
	return 1 - Math.cos((x * Math.PI) / 2);
}

function easeInOutSine(x) {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}

function easeOutCubic(x) {
	return 1 - Math.pow(1 - x, 3);
}

function easeInOutCubic(x) {
	return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const easeFunctions = {
	sine: easeInSine,
	inOutSine: easeInOutSine,
	outCubic: easeOutCubic,
	inOutCubic: easeInOutCubic,
};

export class AnimationValue {
	constructor(value = '', start = 0, end = 0, length = 1, ease = 'inOutSine') {
		this.value = value;
		this.start = start;
		this.end = end;
		this.length = length;
		this.t = 0;
		this.frame = 0;
		this.ease = ease;
	}
	update(object) {
		this.frame++;

		if (this.frame > this.length) {
			this.frame = this.length;
		}

		this.t = easeFunctions[this.ease](this.frame / this.length);
		this.offset = lerp(this.start, this.end, this.t);
		object[this.value] = this.offset;
	}
	stop() {
		this.frame = this.length;
	}
	reset() {
		this.frame = 0;
	}
}

export class AnimationVector {
	constructor(value = 'position', start = new vector(), end = new vector(), length = 1, ease = 'inOutSine') {
		this.value = value;
		this.start = start;
		this.end = end;
		this.length = length;
		this.t = 0;
		this.frame = 0;
		this.ease = ease;
	}
	update(object) {
		this.frame++;

		if (this.frame > this.length) {
			this.frame = this.length;
		}

		this.t = easeFunctions[this.ease](this.frame / this.length);
		this.offset = lerp_vector(this.start, this.end, this.t);
		object[this.value].setV(this.offset);
	}
	stop() {
		this.frame = this.length;
	}
	reset() {
		this.frame = 0;
	}
}
