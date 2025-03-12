import { vector } from './vector.js';

export const deg = Math.PI / 180;

/**
 * Adds all vectors
 * @param  {...any} vectors Vectors to add
 * @returns Resulting vector
 */
export function add(...vectors) {
	let result = new vector();
	for (const vector of vectors) {
		result.addV(vector);
	}
	return result;
}

/**
 * Multiplies all vectors
 * @param  {...any} vectors Vectors to multiply
 * @returns Resluting vector
 */
export function multiply(...vectors) {
	let result = new vector(1, 1);
	for (const vector of vectors) {
		result.scaleV(vector);
	}
	return result;
}

/**
 * Avarages all vectors
 * @param  {...any} vectors Vectors to avarage
 * @returns Resulting vector
 */
export function avarage(...vectors) {
	let sum = add(...vectors);
	return sum.scale(1 / vectors.length, 1 / vectors.length);
}

export function lerp(A, B, t) {
	return A + t * (B - A);
}

export function lerp_vector(vector0 = new vector(), vector1 = new vector(), t) {
	return new vector(lerp(vector0.x, vector1.x, t), lerp(vector0.y, vector1.y, t));
}
