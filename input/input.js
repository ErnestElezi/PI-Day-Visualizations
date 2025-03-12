import { vector } from '../vector/vector.js';

/**
 * Object to store user input states.
 */
export const user_input = {
	/**
	 * Mouse input state.
	 */
	mouse: {
		position: new vector(),
		is_down: false,
		is_changed: false,
		is_bizy: false,
	},
	/**
	 * Keyboard input state.
	 */
	keys: {},
	/**
	 * List of last pressed keys.
	 */
	lastKeys: [],
};

addEventListener('keydown', (event) => {
	user_input.keys[event.key] = {
		is_down: true,
		is_changed: true,
	};
	if (user_input.lastKeys[user_input.lastKeys.length - 1] !== event.key && user_input.lastKeys.indexOf(event.key) === -1) {
		user_input.lastKeys.push(event.key);
	}
});

addEventListener('keyup', (event) => {
	user_input.keys[event.key] = {
		is_down: false,
		is_changed: true,
	};
	user_input.lastKeys.splice(user_input.lastKeys.indexOf(event.key), 1);
});

addEventListener('mousemove', (event) => {
	user_input.mouse.position.set(event.clientX, event.clientY);
});

addEventListener('mousedown', () => {
	user_input.mouse.is_down = true;
	user_input.mouse.is_changed = true;
});

addEventListener('mouseup', () => {
	user_input.mouse.is_down = false;
	user_input.mouse.is_changed = true;
});

/**
 * Updates the input states, resetting the changed flags.
 */
export function update_input() {
	user_input.mouse.is_changed = false;
	for (const key in user_input.keys) {
		user_input.keys[key].is_changed = false;
	}
}

/**
 * Checks if a key is currently pressed down.
 *
 * @param {string} key - The key to check.
 * @returns {boolean} True if the key is down, false otherwise.
 */
export function is_key_down(key) {
	return user_input.keys[key]?.is_down;
}

/**
 * Checks if a key state has changed.
 *
 * @param {string} key - The key to check.
 * @returns {boolean} True if the key state has changed, false otherwise.
 */
export function is_key_changed(key) {
	return user_input.keys[key]?.is_changed;
}

/**
 * Checks if the mouse button is currently pressed down.
 *
 * @returns {boolean} True if the mouse button is down, false otherwise.
 */
export function is_mouse_down() {
	return user_input.mouse.is_down;
}

/**
 * Checks if the mouse state has changed.
 *
 * @returns {boolean} True if the mouse state has changed, false otherwise.
 */
export function is_mouse_changed() {
	return user_input.mouse.is_changed;
}

/**
 * Gets the current mouse position.
 *
 * @returns {vector} A copy of the current mouse position vector.
 */
export function get_mouse_position() {
	return user_input.mouse.position.copy();
}

/**
 * Gets the last pressed key.
 *
 * @returns {string} The last pressed key.
 */
export function get_last_key() {
	return user_input.lastKeys[0];
}

/**
 * Gets the sequence of last pressed keys.
 *
 * @returns {string} A string of the last pressed keys.
 */
export function get_last_keys() {
	let result = '';
	for (const key of user_input.lastKeys) {
		result += key;
	}
	return result;
}

/**
 * Clears the list of last pressed keys.
 */
export function clear_last_keys() {
	user_input.lastKeys = [];
}

/**
 * Clears the state of all keys.
 */
export function clear_keys() {
	user_input.keys = {};
}

/**
 * Checks if a specific sequence of keys has been pressed.
 *
 * @param {string} [sequence=''] - The sequence of keys to check.
 * @returns {boolean} True if the sequence matches, false otherwise.
 */
export function get_sequence(sequence = '') {
	if (get_last_keys().indexOf(sequence) === 0) {
		clear_last_keys();
		return true;
	}
	return false;
}
