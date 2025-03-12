export class Color {
	constructor(r = 0, g = 0, b = 0, a = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	set_a(value = 1){
		return new Color(this.r,this.g,this.b,value)
	}
	/**
	 * Returns the color as a CSS rgba string.
	 *
	 * @returns {string} The color in rgba format.
	 */
	get color() {
		return `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}

	/**
	 * Returns the color as an array of [r, g, b, a].
	 *
	 * @returns {number[]} The color as an array.
	 */
	get color_array() {
		return [this.r, this.g, this.b, this.a];
	}

	/**
	 * Creates a copy of the current color.
	 *
	 * @returns {Color} A new Color object with the same values.
	 */
	copy() {
		return new Color(this.r, this.g, this.b, this.a);
	}

	/**
	 * Sets the RGB values of the color.
	 *
	 * @param {number} [r=0] - The red component.
	 * @param {number} [g=0] - The green component.
	 * @param {number} [b=0] - The blue component.
	 * @returns {Color} A new Color object with the updated values.
	 */
	set_rgb(r = 0, g = 0, b = 0) {
		this.r = r;
		this.g = g;
		this.b = b;
		return this.copy();
	}

	/**
	 * Sets the RGBA values of the color.
	 *
	 * @param {number} [r=0] - The red component.
	 * @param {number} [g=0] - The green component.
	 * @param {number} [b=0] - The blue component.
	 * @param {number} [a=1] - The alpha component.
	 * @returns {Color} A new Color object with the updated values.
	 */
	set_rgba(r = 0, g = 0, b = 0, a = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
		return this.copy();
	}

	/**
	 * Sets the color from a hex string.
	 * @param {string} [hex='#000000'] - The hex string.
	 * @returns {Color} A new Color object with the updated values
	 */
	set_hex(hex = '#000000') {
		const hex_color = hex.replace('#', '');
		this.r = parseInt(hex_color.substring(0, 2), 16);
		this.g = parseInt(hex_color.substring(2, 4), 16);
		this.b = parseInt(hex_color.substring(4, 6), 16);
		this.a = 1;
		return this.copy();
	}

	/**
	 * Adds the values of another color to this color.
	 *
	 * @param {Color} [color=new Color()] - The color to add.
	 * @returns {Color} A new Color object with the added values.
	 */
	add(color = new Color()) {
		this.r += color.r;
		this.g += color.g;
		this.b += color.b;
		this.a += color.a;
		return this.copy();
	}

	/**
	 * Subtracts the values of another color from this color.
	 *
	 * @param {Color} [color=new Color()] - The color to subtract.
	 * @returns {Color} A new Color object with the subtracted values.
	 */
	subtract(color = new Color()) {
		this.r -= color.r;
		this.g -= color.g;
		this.b -= color.b;
		this.a -= color.a;
		return this.copy();
	}

	/**
	 * Multiplies the values of another color with this color.
	 *
	 * @param {Color} [color=new Color()] - The color to multiply.
	 * @returns {Color} A new Color object with the multiplied values.
	 */
	multiply(color = new Color()) {
		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;
		this.a *= color.a;
		return this.copy();
	}

	/**
	 * Divides the values of this color by another color.
	 *
	 * @param {Color} [color=new Color()] - The color to divide by.
	 * @returns {Color} A new Color object with the divided values.
	 */
	devide(color = new Color()) {
		this.r /= color.r;
		this.g /= color.g;
		this.b /= color.b;
		this.a /= color.a;
		return this.copy();
	}
}
