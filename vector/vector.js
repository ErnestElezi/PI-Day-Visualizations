/**
 * @module Vector 2d class
 * * Base of all other modules
 */
export class vector {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Gets the length of the current vector
	 * @returns length
	 */
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	/**
	 * Gets the angle of the current vector
	 * @returns angle
	 */
	get angle() {
		return Math.atan2(this.y, this.x);
	}

	/**
	 * Gets the direction of the current vector
	 * @returns vector
	 */
	get direction() {
		return this.copy().normalize();
	}

	/**
	 * Creates a copy of the current vector
	 * @returns Copy of current vector
	 */
	copy() {
		return new vector(this.x, this.y);
	}

	/**
	 * Returns a reference to current vector
	 * @returns Current vector
	 */
	reference() {
		return this;
	}

	/**
	 * Sets the vector
	 * @param {number} x X value
	 * @param {number} y Y value
	 * @returns Copy of current vector
	 */
	set(x = 0, y = 0) {
		this.x = x;
		this.y = y;
		return this.copy();
	}

	/**
	 * sets the vector from argument vector
	 * @param {vector} vector vector
	 * @returns copy of current vector
	 */
	setV(vector = new vector()) {
		this.set(vector.x, vector.y);
		return this.copy();
	}

	/**
	 * Subtracts the given x and y values from the current vector's x and y values.
	 *
	 * @param {number} [x=0] - The x value to subtract.
	 * @param {number} [y=0] - The y value to subtract.
	 * @returns {Object} A copy of the updated vector.
	 */
	sub(x = 0, y = 0) {
		this.set(this.x - x, this.y - y);
		return this.copy();
	}

	/**
	 * Subtracts the given vector from the current vector.
	 *
	 * @param {Object} vector - The vector to subtract.
	 * @returns {Object} A copy of the current vector after subtraction.
	 */
	subV(vector = new vector()) {
		this.sub(vector.x, vector.y);
		return this.copy();
	}

	/**
	 * Adds an offset to the current vector
	 * @param {number} x X
	 * @param {number} y Y
	 * @returns Copy of current vector
	 */
	add(x = 0, y = 0) {
		this.x += x;
		this.y += y;
		return this.copy();
	}

	/**
	 * Adds a vector to the current vector
	 * @param {vector} vector Vector
	 * @returns Copy of current vector
	 */
	addV(vector = new vector()) {
		this.add(vector.x, vector.y);
		return this.copy();
	}

	/**
	 * Scales the vector by x and y arguments
	 * @param {number} x X
	 * @param {number} y Y
	 * @returns Copy of current vector
	 */
	scale(x = 1, y = 1) {
		this.x *= x;
		this.y *= y;
		return this.copy();
	}

	/**
	 * Scales the current vector by another vector
	 * @param {vector} vector Vector
	 * @returns
	 */
	scaleV(vector = new vector()) {
		this.scale(vector.x, vector.y);
		return this.copy();
	}

	/**
	 * Normalizes the current vector
	 * @returns Copy of current vector
	 */
	normalize() {
		let length = this.length;
		this.x /= length;
		this.y /= length;
		return this.copy();
	}

	/**
	 * Checks if the current vector is within the defined range
	 * @param {vector} min Minimum threshold
	 * @param {vector} max Maximum threshold
	 * @returns True/False
	 */
	within_range(min = new vector(), max = new vector()) {
		return (this.x < min.x ? false : this.x > max.x ? false : true) && (this.y < min.y ? false : this.y > max.y ? false : true);
	}

	/**
	 * Clamps the current vector to within the defined range
	 * @param {vector} min Minimum threshold
	 * @param {vector} max Maximum threshold
	 * @returns Clamped Vector
	 */
	clamp(min = new vector(), max = new vector()) {
		this.set(this.x < min.x ? min.x : this.x > max.x ? max.x : this.x, this.y < min.y ? min.y : this.y > max.y ? max.y : this.y);
		return this.copy();
	}

	/**
	 * Rotoates the current vector by the defined angle
	 * @param {number} angle Angle
	 * @returns Copy of the current vector
	 */
	rotate(angle = 0) {
		let length = this.length;
		let new_angle = this.angle + angle;
		this.setByAngle(new_angle, length);
		return this.copy();
	}

	/**
	 * Sets the current vector using the defined angle and length
	 * @param {number} angle Angle
	 * @param {number} length Length
	 * @returns Copy of the current vector
	 */
	setByAngle(angle = 0, length = 0) {
		this.set(Math.cos(angle) * length, Math.sin(angle) * length);
		return this.copy();
	}

	/**
	 * Adds a new vector to the current vector using the defined angle and length
	 * @param {number} angle Angle
	 * @param {number} length Length
	 * @returns Copy of the current vector
	 */
	addOffsetByAngle(angle = 0, length = 0) {
		let original_vector = this.copy();
		let angle_offset = this.setByAngle(angle, length);
		this.setV(original_vector.addV(angle_offset));
		return this.copy();
	}

	/**
	 * Rounds the vector to the nearest intiger
	 * @returns Copy of the vector
	 */
	round() {
		this.set(Math.round(this.x), Math.round(this.y));
		return this.copy();
	}

	/**
	 * Floors the vector to the nearest intiger down
	 * @returns Copy of the vector
	 */
	floor() {
		this.set(Math.floor(this.x), Math.floor(this.y));
		return this.copy();
	}

	/**
	 * Celings the vector to the nearest intiger up
	 * @returns Copy of the vector
	 */
	celi() {
		this.set(Math.round(this.x), Math.round(this.y));
		return this.copy();
	}

	/**
	 * Randomizes the current vector from 0 to 1
	 * @returns Copy of the current vector
	 */
	random() {
		this.x = Math.random();
		this.y = Math.random();
		return this.copy();
	}

	/**
	 * Randomizes the current vector from defined range
	 * @param {number} Xmin Minimum x value
	 * @param {number} Xmax Maximum x value
	 * @param {number} Ymin Minimum y value
	 * @param {number} Ymax Maximum y value
	 * @returns Copy of the current vector
	 */
	randomRange(Xmin = 0, Xmax = 0, Ymin = 0, Ymax = 0) {
		this.random();
		this.scale(Xmax - Xmin, Ymax - Ymin);
		this.add(Xmin, Ymin);
		return this.copy();
	}

	/**
	 * Randomizes the current vector from defined range
	 * @param {vector} min Minimum threshold
	 * @param {vector} max Maximum threshold
	 * @returns Copy of the current vector
	 */
	randomRangeV(min = new vector(), max = new vector()) {
		this.randomRange(min.x, max.x, min.y, max.y);
		return this.copy();
	}

	/**
	 * Randomizes the current vector from defined range and rounds to the nearest intiger
	 * @param {number} Xmin Minimum x value
	 * @param {number} Xmax Maximum x value
	 * @param {number} Ymin Minimum y value
	 * @param {number} Ymax Maximum y value
	 * @returns Copy of the current vector
	 */
	randomIntRange(Xmin = 0, Xmax = 0, Ymin = 0, Ymax = 0) {
		this.randomRange(Xmin, Xmax, Ymin, Ymax);
		this.round();
		return this.copy();
	}

	/**
	 * Randomizes the current vector from defined range and rounds to the nearest intiger
	 * @param {vector} min Minimum threshold
	 * @param {vector} max Maximum threshold
	 * @returns Copy of the current vector
	 */
	randomIntRangeV(min = new vector(), max = new vector()) {
		this.randomIntRange(min.x, max.x, min.y, max.y);
		return this.copy();
	}
}
