import { can } from '../brush/brush.js';
import { Color } from '../color/color.js';
import { palette } from '../color/color_constants.js';
import { user_input } from '../input/input.js';
import { vector } from '../vector/vector.js';
import { AnimationValue, AnimationVector } from './animation.js';

export class Interactive {
	constructor(position = new vector(), size = new vector(), grab_enabled = false, idle_func = () => {}, hover_func = () => {}, click_func = () => {}) {
		this.position = position;
		this.size = size;
		this.hover = false;
		this.click = false;
		this.grab_enabled = grab_enabled;
		this.grab_offset = new vector();
		this.grabbed = false;
		this.idle_func = idle_func;
		this.hover_func = hover_func;
		this.click_func = click_func;
	}

	mouse_check() {
		this.hover = user_input.mouse.position.within_range(this.position, this.position.copy().addV(this.size)) && !user_input.mouse.is_bizy;
		this.click = this.hover && user_input.mouse.is_down && user_input.mouse.is_changed;
		if (this.grab_enabled) {
			if (this.click && !this.grabbed) {
				this.grabbed = true;
				this.grab_offset = user_input.mouse.position.copy().subV(this.position);
			}
			if (this.grabbed) {
				this.position.setV(user_input.mouse.position.copy().subV(this.grab_offset));
				if (!user_input.mouse.is_down) {
					this.grabbed = false;
				}
			}
		}

		if (this.click) {
			this.click_func(this);
		} else if (this.hover) {
			this.hover_func(this);
		} else {
			this.idle_func(this);
		}
	}
}

export class Panel extends Interactive {
	constructor(
		position = new vector(),
		size = new vector(),
		fill = new Color(),
		stroke = new Color(),
		lineWidth = 0,
		borderRadius = 10,
		idleFunc = () => {},
		hoverFunc = () => {},
		clickFunc = () => {},
		children = [],
		grab_enabled = false
	) {
		super(position, size, grab_enabled, idleFunc, hoverFunc, clickFunc);
		this.fill = fill;
		this.stroke = stroke;
		this.lineWidth = lineWidth;
		this.borderRadius = borderRadius;
		this.idleFunc = idleFunc;
		this.hoverFunc = hoverFunc;
		this.clickFunc = clickFunc;
		this.children = children;
		this.animations = [];
	}

	draw() {
		can.drawRoundRectV(this.position, this.size, this.borderRadius, this.fill, this.stroke, this.lineWidth);
		can.save();
		can.translateV(this.position);
		this.children.forEach((child) => child.draw());

		can.setFillColor(palette.pink);
		can.c.fillText('Hover: ' + this.hover, 20, 20);
		can.c.fillText('Click: ' + this.click, 20, 40);
		can.c.fillText('Grabbed: ' + this.grabbed, 20, 60);
		can.c.fillText('Position: ' + this.position.x + ',' + this.position.y, 20, 80);

		can.restore();
	}

	move(start = new vector(), end = new vector(), time = 1, ease = 'inOutCubic') {
		this.animations.push(new AnimationVector('position', start, end, time, ease));
	}

	scale(size = new vector(), time = 1, ease = 'inOutCubic') {
		this.animations.push(new AnimationVector('size', this.size.copy(), size, time, ease));
	}

	shift(x = new vector(), time = 1, ease = 'inOutCubic') {
		this.animations.push(new AnimationVector('position', this.position.copy(), this.position.copy().addV(x), time, ease));
	}

	update() {
		this.animations.forEach((animation) => {
			animation.update(this);
			if (animation.frame >= animation.length) {
				this.animations.splice(this.animations.indexOf(animation), 1);
			}
		});
		this.children.forEach((child) => child.update());
		this.mouse_check();
	}
}

export class Label {
	constructor(
		text = 'No Text',
		text_align = 'left',
		text_baseline = 'top',
		position = new vector(),
		fill = palette.white,
		stroke = palette.transparent,
		lineWidth = 0,
		borderWidth = 0,
		borderColor = palette.white
	) {
		this.text = text;
		this.position = position;
		this.fill = fill;
		this.stroke = stroke;
		this.lineWidth = lineWidth;
		this.borderWidth = borderWidth;
		this.borderColor = borderColor;
		this.textAlign = text_align;
		this.textBaseline = text_baseline;
	}

	draw_label() {
		can.save();
		can.c.textAlign = this.textAlign;
		can.c.textBaseline = this.textBaseline;
		can.fillRect(this.position.x - 2.5, this.position.y - 2.5, can.c.measureText(this.text).width + 5, 25, this.borderColor, this.borderWidth);
		can.setFillColor(this.fill);
		can.setStrokeColor(this.stroke);
		can.c.lineWidth = this.lineWidth;
		can.c.font = '20px Arial';
		can.c.fillText(this.text, this.position.x, this.position.y);
		can.c.strokeText(this.text, this.position.x, this.position.y);
		can.restore();
	}

	draw() {
		this.draw_label();
	}

	update() {}
}

export class Button extends Panel {
	constructor(
		text = 'Button',
		position = new vector(),
		size = new vector(),
		fill = new Color(),
		stroke = new Color(),
		lineWidth = 0,
		borderRadius = 10,
		idleFunc = () => {},
		hoverFunc = () => {},
		clickFunc = () => {}
	) {
		super(position, size, fill, stroke, lineWidth, borderRadius, idleFunc, hoverFunc, clickFunc, [new Label()], false);
	}
}
