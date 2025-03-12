import { Color } from '../color/color.js';
import { vector } from '../vector/vector.js';
import { deg } from '../vector/vector_math.js';

export class Brush {
	constructor(canvas_element = document.querySelector('canvas'), anti_aliasing = true) {
		this.canvas_element = canvas_element;
		this.c = canvas_element.getContext('2d');
		this.anti_aliasing = anti_aliasing;
	}

	// Canvas Methods

	/**
	 * Resizes the canvas element to the specified width and height.
	 *
	 * @param {number} [width=1920] - The new width of the canvas.
	 * @param {number} [height=1080] - The new height of the canvas.
	 */
	resize(width = 1920, height = 1080) {
		this.canvas_element.width = width;
		this.canvas_element.height = height;
		this.c.imageSmoothingEnabled = false;
	}

	// Context methods

	/**
	 * Begins a new path by emptying the list of sub-paths.
	 */
	beginPath() {
		this.c.beginPath();
	}

	/**
	 * Closes the current path by drawing a straight line back to the start.
	 */
	closePath() {
		this.c.closePath();
	}

	/**
	 * Connects the last point in the sub-path to the specified (x, y) coordinates with a straight line.
	 *
	 * @param {number} [x=0] - The x-coordinate of the end point.
	 * @param {number} [y=0] - The y-coordinate of the end point.
	 */
	lineTo(x = 0, y = 0) {
		this.c.lineTo(x, y);
	}

	/**
	 * Connects the last point in the sub-path to the specified vector point with a straight line.
	 *
	 * @param {vector} [point=new vector()] - The vector point to connect to.
	 */
	lineToV(point = new vector()) {
		this.c.lineTo(point.x, point.y);
	}

	/**
	 * Moves the starting point of a new sub-path to the (x, y) coordinates.
	 *
	 * @param {number} [x=0] - The x-coordinate of the new starting point.
	 * @param {number} [y=0] - The y-coordinate of the new starting point.
	 */
	moveTo(x = 0, y = 0) {
		this.c.moveTo(x, y);
	}

	/**
	 * Moves the starting point of a new sub-path to the specified vector point.
	 *
	 * @param {vector} [point=new vector()] - The vector point to move to.
	 */
	moveToV(point = new vector()) {
		this.c.moveTo(point.x, point.y);
	}

	// Drawing Paths

	/**
	 * Draws a rectangle path on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 */
	pathRect(x = 0, y = 0, w = 0, h = 0) {
		this.c.rect(x, y, w, h);
	}

	/**
	 * Draws a rectangle path on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the rectangle's starting point.
	 * @param {vector} [size=new vector()] - The size vector of the rectangle.
	 */
	pathRectV(position = new vector(), size = new vector()) {
		this.c.rect(position.x, position.y, size.x, size.y);
	}

	/**
	 * Draws a circle path on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the circle's center.
	 * @param {number} [y=0] - The y-coordinate of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 */
	pathCircle(x = 0, y = 0, radius = 0) {
		this.c.arc(x, y, radius, 0, Math.PI * 2, false);
	}

	/**
	 * Draws a circle path on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 */
	pathCircleV(position = new vector(), radius = 0) {
		this.c.arc(position.x, position.y, radius, 0, Math.PI * 2, false);
	}

	/**
	 * Draws an arc path on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the arc's center.
	 * @param {number} [y=0] - The y-coordinate of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 */
	pathArc(x = 0, y = 0, radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false) {
		this.c.arc(x, y, radius, starAnge, endAngle, counterClockwise);
	}

	/**
	 * Draws an arc path on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 */
	pathArcV(position = new vector(), radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false) {
		this.c.arc(position.x, position.y, radius, starAnge, endAngle, counterClockwise);
	}

	/**
	 * Draws a line path on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the line's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the line's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the line's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the line's ending point.
	 */
	pathLine(x0 = 0, y0 = 0, x1 = 0, y1 = 0) {
		if (x0 === x1 && y0 === y1) return;
		this.c.moveTo(x0, y0);
		this.c.lineTo(x1, y1);
	}

	/**
	 * Draws a line path on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the line.
	 * @param {vector} [end=new vector()] - The ending point vector of the line.
	 */
	pathLineV(start = new vector(), end = new vector()) {
		this.c.moveTo(start.x, start.y);
		this.c.lineTo(end.x, end.y);
	}

	/**
	 * Draws an arrow path on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the arrow's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the arrow's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the arrow's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the arrow's ending point.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 */
	pathArrow(x0 = 0, y0 = 0, x1 = 0, y1 = 0, headLength = 0, headAngle = 0) {
		let direction = new vector(x1 - x0, y1 - y0);
		let length = direction.length;
		let angle = direction.angle;

		let body = new vector(length).rotate(angle).add(x0, y0);

		let offset1 = new vector()
			.setByAngle(180 * deg - headAngle, headLength)
			.rotate(angle)
			.add(x0, y0);
		let offset2 = new vector()
			.setByAngle(180 * deg + headAngle, headLength)
			.rotate(angle)
			.add(x0, y0);

		this.pathLine(x0, y0, x1, y1);
		this.pathLineV(offset1, body);
		this.pathLineV(offset2, body);
	}

	/**
	 * Draws an arrow path on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the arrow.
	 * @param {vector} [end=new vector()] - The ending point vector of the arrow.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 */
	pathArrowV(start = new vector(), end = new vector(), headLength = 0, headAngle = 0) {
		this.pathArrow(start.x, start.y, end.x, end.y, headLength, headAngle);
	}

	/**
	 * Draws a star path on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the star's center.
	 * @param {number} [y=0] - The y-coordinate of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 */
	pathStar(x = 0, y = 0, points = 0, minRadius = 0, maxRadius = 0) {
		let increment = (360 / points) * deg;

		for (let i = 0; i < points; i++) {
			let angle = i * increment;
			let radius = i % 2 === 0 ? maxRadius : minRadius;

			let point = new vector().setByAngle(angle, radius).add(x, y);

			if (i === 0) this.c.moveTo(point.x, point.y);
			else this.c.lineTo(point.x, point.y);
		}
	}

	/**
	 * Draws a star path on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 */
	pathStarV(position = new vector(), points = 0, minRadius = 0, maxRadius = 0) {
		this.pathStar(position.x, position.y, points, minRadius, maxRadius);
	}

	/**
	 * Draws a polygon path on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the polygon's center.
	 * @param {number} [y=0] - The y-coordinate of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 */
	pathPolygon(x = 0, y = 0, points = 0, radius = 0) {
		let increment = (360 / points) * deg;
		for (let i = 0; i < points; i++) {
			let angle = i * increment;
			let point = new vector().setByAngle(angle, radius).add(x, y);

			if (i === 0) this.c.moveTo(point.x, point.y);
			else this.c.lineTo(point.x, point.y);
		}
	}

	/**
	 * Draws a polygon path on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 */
	pathPolygonV(position = new vector(), points = 0, radius = 0) {
		this.pathPolygon(position.x, position.y, points, radius);
	}

	/**
	 * Draws a shape path on the canvas context using vector objects.
	 *
	 * @param {vector[]} [points=[new vector()]] - An array of vectors representing the points of the shape.
	 */
	pathShapeV(points = [new vector()]) {
		for (let i = 0; i < points.length; i++) {
			let point = points[i];
			if (i === 0) this.c.moveTo(point.x, point.y);
			else this.c.lineTo(point.x, point.y);
		}
	}

	/**
	 * Draws a rounded rectangle path on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {number} [r=0] - The radius of the rectangle's corners.
	 */
	pathRoundedRect(x = 0, y = 0, w = 0, h = 0, r = 0) {
		this.c.moveTo(x + r, y);
		this.c.arcTo(x + w, y, x + w, y + h, r);
		this.c.arcTo(x + w, y + h, x, y + h, r);
		this.c.arcTo(x, y + h, x, y, r);
		this.c.arcTo(x, y, x + w, y, r);
	}
	/**
	 * Draws a rounded rectangle path with vertical orientation.
	 *
	 * @param {vector} [position=new vector()] - The position of the rectangle.
	 * @param {vector} [size=new vector()] - The size of the rectangle.
	 * @param {number} [r=0] - The radius of the rounded corners.
	 */
	pathRoundedRectV(position = new vector(), size = new vector(), r = 0) {
		this.pathRoundedRect(position.x, position.y, size.x, size.y, r);
	}

	// Fill Shapes

	/**
	 * Fills a rectangle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillRect(x = 0, y = 0, w = 0, h = 0, fill = new Color()) {
		this.beginPath();
		this.pathRect(x, y, w, h);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a rectangle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the rectangle's starting point.
	 * @param {vector} [size=new vector()] - The size vector of the rectangle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillRectV(position = new vector(), size = new vector(), fill = new Color()) {
		this.beginPath();
		this.pathRectV(position, size);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a circle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the circle's center.
	 * @param {number} [y=0] - The y-coordinate of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillCircle(x = 0, y = 0, radius = 0, fill = new Color()) {
		this.beginPath();
		this.pathCircle(x, y, radius);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a circle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillCircleV(position = new vector(), radius = 0, fill = new Color()) {
		this.beginPath();
		this.pathCircleV(position, radius);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills an arc on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the arc's center.
	 * @param {number} [y=0] - The y-coordinate of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillArc(x = 0, y = 0, radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false, fill = new Color()) {
		this.beginPath();
		this.pathArc(x, y, radius, starAnge, endAngle, counterClockwise);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills an arc on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillArcV(position = new vector(), radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false, fill = new Color()) {
		this.beginPath();
		this.pathArcV(position, radius, starAnge, endAngle, counterClockwise);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a line on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the line's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the line's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the line's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the line's ending point.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillLine(x0 = 0, y0 = 0, x1 = 0, y1 = 0, fill = new Color()) {
		this.beginPath();
		this.pathLine(x0, y0, x1, y1);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a line on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the line.
	 * @param {vector} [end=new vector()] - The ending point vector of the line.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillLineV(start = new vector(), end = new vector(), fill = new Color()) {
		this.beginPath();
		this.pathLineV(start, end);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills an arrow on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the arrow's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the arrow's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the arrow's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the arrow's ending point.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillArrow(x0 = 0, y0 = 0, x1 = 0, y1 = 0, headLength = 0, headAngle = 0, fill = new Color()) {
		this.beginPath();
		this.pathArrow(x0, y0, x1, y1, headLength, headAngle);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills an arrow on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the arrow.
	 * @param {vector} [end=new vector()] - The ending point vector of the arrow.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillArrowV(start = new vector(), end = new vector(), headLength = 0, headAngle = 0, fill = new Color()) {
		this.beginPath();
		this.pathArrowV(start, end, headLength, headAngle);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a star on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the star's center.
	 * @param {number} [y=0] - The y-coordinate of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillStar(x = 0, y = 0, points = 0, minRadius = 0, maxRadius = 0, fill = new Color()) {
		this.beginPath();
		this.pathStar(x, y, points, minRadius, maxRadius);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a star on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillStarV(position = new vector(), points = 0, minRadius = 0, maxRadius = 0, fill = new Color()) {
		this.beginPath();
		this.pathStarV(position, points, minRadius, maxRadius);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a polygon on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the polygon's center.
	 * @param {number} [y=0] - The y-coordinate of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillPolygon(x = 0, y = 0, points = 0, radius = 0, fill = new Color()) {
		this.beginPath();
		this.pathPolygon(x, y, points, radius);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a polygon on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillPolygonV(position = new vector(), points = 0, radius = 0, fill = new Color()) {
		this.beginPath();
		this.pathPolygonV(position, points, radius);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a shape on the canvas context using vector objects.
	 *
	 * @param {vector[]} [points=[new vector()]] - An array of vectors representing the points of the shape.
	 * @param {Color} [fill=new Color()] - The fill color.
	 */
	fillShapeV(points = [new vector()], fill = new Color()) {
		this.beginPath();
		this.pathShapeV(points);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	/**
	 * Fills a rounded rectangle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {number} [r=0] - The radius of the rectangle's corners.
	 * @param {Color} [fill=new Color()] - The fill color.
	 *
	 * @example
	 * brush.fillRoundRect(100, 100, 200, 100, 10, new Color(255, 0, 0));
	 */
	fillRoundRect(x = 0, y = 0, w = 0, h = 0, r = 0, fill = new Color()) {
		this.beginPath();
		this.pathRoundedRect(x, y, w, h, r);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}
	/**
	 * Draws and fills a rounded rectangle on the canvas.
	 *
	 * @param {vector} [position=new vector()] - The position of the top-left corner of the rectangle.
	 * @param {vector} [size=new vector()] - The size of the rectangle.
	 * @param {number} [r=0] - The radius of the rounded corners.
	 * @param {Color} [fill=new Color()] - The fill color of the rectangle.
	 */
	fillRoundRectV(position = new vector(), size = new vector(), r = 0, fill = new Color()) {
		this.beginPath();
		this.pathRoundedRectV(position, size, r);
		this.setFillColor(fill);
		this.fill();
		this.closePath();
	}

	// Stroke Shapes

	/**
	 * Strokes the current path on the canvas context.
	 *
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeV(stroke = new Color(), lineWidth = 1) {
		if (lineWidth > 0 && stroke.a > 0) {
			this.setLineWidth(lineWidth);
			this.setStrokeColor(stroke);
			this.stroke();
		}
		this.closePath();
	}

	/**
	 * Strokes a rectangle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeRect(x = 0, y = 0, w = 0, h = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRect(x, y, w, h);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a rectangle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the rectangle's starting point.
	 * @param {vector} [size=new vector()] - The size vector of the rectangle.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeRectV(position = new vector(), size = new vector(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRectV(position, size);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a circle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the circle's center.
	 * @param {number} [y=0] - The y-coordinate of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeCircle(x = 0, y = 0, radius = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathCircle(x, y, radius);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a circle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeCircleV(position = new vector(), radius = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathCircleV(position, radius);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes an arc on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the arc's center.
	 * @param {number} [y=0] - The y-coordinate of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeArc(x = 0, y = 0, radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArc(x, y, radius, starAnge, endAngle, counterClockwise);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes an arc on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeArcV(position = new vector(), radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArcV(position, radius, starAnge, endAngle, counterClockwise);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a line on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the line's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the line's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the line's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the line's ending point.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeLine(x0 = 0, y0 = 0, x1 = 0, y1 = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathLine(x0, y0, x1, y1);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a line on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the line.
	 * @param {vector} [end=new vector()] - The ending point vector of the line.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeLineV(start = new vector(), end = new vector(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathLineV(start, end);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes an arrow on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the arrow's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the arrow's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the arrow's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the arrow's ending point.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeArrow(x0 = 0, y0 = 0, x1 = 0, y1 = 0, headLength = 0, headAngle = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArrow(x0, y0, x1, y1, headLength, headAngle);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes an arrow on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the arrow.
	 * @param {vector} [end=new vector()] - The ending point vector of the arrow.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeArrowV(start = new vector(), end = new vector(), headLength = 0, headAngle = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArrowV(start, end, headLength, headAngle);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a star on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the star's center.
	 * @param {number} [y=0] - The y-coordinate of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeStar(x = 0, y = 0, points = 0, minRadius = 0, maxRadius = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathStar(x, y, points, minRadius, maxRadius);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a star on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeStarV(position = new vector(), points = 0, minRadius = 0, maxRadius = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathStarV(position, points, minRadius, maxRadius);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a polygon on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the polygon's center.
	 * @param {number} [y=0] - The y-coordinate of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokePolygon(x = 0, y = 0, points = 0, radius = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathPolygon(x, y, points, radius);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a polygon on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokePolygonV(position = new vector(), points = 0, radius = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathPolygonV(position, points, radius);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a shape on the canvas context using vector objects.
	 *
	 * @param {vector[]} [points=[new vector()]] - An array of vectors representing the points of the shape.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeShapeV(points = [new vector()], stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathShapeV(points);
		this.strokeV(stroke, lineWidth);
	}

	/**
	 * Strokes a rounded rectangle on the canvas context.
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {number} [r=0] - The radius of the rectangle's corners.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeRoundRect(x = 0, y = 0, w = 0, h = 0, r = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRoundedRect(x, y, w, h, r);
		this.strokeV(stroke, lineWidth);
	}
	/**
	 * Strokes and draws a rounded rectangle on the canvas.
	 * @param {vector} [position=new vector()] - The position of the top-left corner of the rectangle.
	 * @param {vector} [size=new vector()] - The size of the rectangle.
	 * @param {number} [r=0] - The radius of the rounded corners.
	 * @param {Color} [stroke=new Color()] - The stroke color of the rectangle.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	strokeRoundRectV(position = new vector(), size = new vector(), r = 0, stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRoundedRectV(position, size, r);
		this.strokeV(stroke, lineWidth);
	}

	// Draw Shapes

	/**
	 * Draws a shape on the canvas context.
	 *
	 * @param {Function} [path=new Function()] - The path drawing function.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	draw(fill = new Color(), stroke = new Color(), lineWidth = 1) {
		if (fill.a > 0) {
			this.setFillColor(fill);
			this.fill();
		}
		if (lineWidth > 0 && stroke.a > 0) {
			this.setLineWidth(lineWidth);
			this.setStrokeColor(stroke);
			this.stroke();
		}
		this.closePath();
	}

	/**
	 * Draws a rectangle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawRect(x = 0, y = 0, w = 0, h = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRect(x, y, w, h);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a rectangle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the rectangle's starting point.
	 * @param {vector} [size=new vector()] - The size vector of the rectangle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawRectV(position = new vector(), size = new vector(), fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRectV(position, size);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a circle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the circle's center.
	 * @param {number} [y=0] - The y-coordinate of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawCircle(x = 0, y = 0, radius = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathCircle(x, y, radius);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a circle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the circle's center.
	 * @param {number} [radius=0] - The radius of the circle.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawCircleV(position = new vector(), radius = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathCircleV(position, radius);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws an arc on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the arc's center.
	 * @param {number} [y=0] - The y-coordinate of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawArc(x = 0, y = 0, radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArc(x, y, radius, starAnge, endAngle, counterClockwise);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws an arc on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the arc's center.
	 * @param {number} [radius=0] - The radius of the arc.
	 * @param {number} [starAnge=0] - The starting angle of the arc in radians.
	 * @param {number} [endAngle=Math.PI * 2] - The ending angle of the arc in radians.
	 * @param {boolean} [counterClockwise=false] - Whether the arc is drawn counterclockwise.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawArcV(position = new vector(), radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArcV(position, radius, starAnge, endAngle, counterClockwise);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a line on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the line's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the line's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the line's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the line's ending point.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawLine(x0 = 0, y0 = 0, x1 = 0, y1 = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathLine(x0, y0, x1, y1);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a line on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the line.
	 * @param {vector} [end=new vector()] - The ending point vector of the line.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawLineV(start = new vector(), end = new vector(), fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathLineV(start, end);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws an arrow on the canvas context.
	 *
	 * @param {number} [x0=0] - The x-coordinate of the arrow's starting point.
	 * @param {number} [y0=0] - The y-coordinate of the arrow's starting point.
	 * @param {number} [x1=0] - The x-coordinate of the arrow's ending point.
	 * @param {number} [y1=0] - The y-coordinate of the arrow's ending point.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawArrow(x0 = 0, y0 = 0, x1 = 0, y1 = 0, headLength = 0, headAngle = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArrow(x0, y0, x1, y1, headLength, headAngle);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws an arrow on the canvas context using vector objects.
	 *
	 * @param {vector} [start=new vector()] - The starting point vector of the arrow.
	 * @param {vector} [end=new vector()] - The ending point vector of the arrow.
	 * @param {number} [headLength=0] - The length of the arrowhead.
	 * @param {number} [headAngle=0] - The angle of the arrowhead.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawArrowV(start = new vector(), end = new vector(), headLength = 0, headAngle = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathArrowV(start, end, headLength, headAngle);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a star on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the star's center.
	 * @param {number} [y=0] - The y-coordinate of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawStar(x = 0, y = 0, points = 0, minRadius = 0, maxRadius = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathStar(x, y, points, minRadius, maxRadius);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a star on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the star's center.
	 * @param {number} [points=0] - The number of points of the star.
	 * @param {number} [minRadius=0] - The minimum radius of the star.
	 * @param {number} [maxRadius=0] - The maximum radius of the star.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawStarV(position = new vector(), points = 0, minRadius = 0, maxRadius = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathStarV(position, points, minRadius, maxRadius);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a polygon on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the polygon's center.
	 * @param {number} [y=0] - The y-coordinate of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawPolygon(x = 0, y = 0, points = 0, radius = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathPolygon(x, y, points, radius);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a polygon on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the polygon's center.
	 * @param {number} [points=0] - The number of points of the polygon.
	 * @param {number} [radius=0] - The radius of the polygon.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawPolygonV(position = new vector(), points = 0, radius = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathPolygonV(position, points, radius);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a shape on the canvas context using vector objects.
	 *
	 * @param {vector[]} [points=[new vector()]] - An array of vectors representing the points of the shape.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawShapeV(points = [new vector()], fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathShapeV(points);
		this.draw(fill, stroke, lineWidth);
	}

	/**
	 * Draws a rounded rectangle on the canvas context.
	 *
	 * @param {number} [x=0] - The x-coordinate of the rectangle's starting point.
	 * @param {number} [y=0] - The y-coordinate of the rectangle's starting point.
	 * @param {number} [w=0] - The width of the rectangle.
	 * @param {number} [h=0] - The height of the rectangle.
	 * @param {number} [r=0] - The radius of the rectangle's corners.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawRoundRect(x = 0, y = 0, w = 0, h = 0, r = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRoundedRect(x, y, w, h, r);
		this.draw(fill, stroke, lineWidth);
	}
	/**
	 * Draws a rounded rectangle on the canvas context using vector objects.
	 *
	 * @param {vector} [position=new vector()] - The position vector of the rectangle's starting point.
	 * @param {vector} [size=new vector()] - The size vector of the rectangle.
	 * @param {number} [r=0] - The radius of the rectangle's corners.
	 * @param {Color} [fill=new Color()] - The fill color.
	 * @param {Color} [stroke=new Color()] - The stroke color.
	 * @param {number} [lineWidth=1] - The width of the stroke line.
	 */
	drawRoundRectV(position = new vector(), size = new vector(), r = 0, fill = new Color(), stroke = new Color(), lineWidth = 1) {
		this.beginPath();
		this.pathRoundedRectV(position, size, r);
		this.draw(fill, stroke, lineWidth);
	}

	// Rendering

	/**
	 * Sets the fill color for the canvas context.
	 *
	 * @param {Color} [color=new Color()] - The color to set as the fill color.
	 */
	setFillColor(color = new Color()) {
		this.c.fillStyle = color.color;
	}

	/**
	 * Sets the stroke color for the canvas context.
	 *
	 * @param {Color} [color=new Color()] - The color to set as the stroke color.
	 */
	setStrokeColor(color = new Color()) {
		this.c.strokeStyle = color.color;
	}

	/**
	 * Sets the line width for the canvas context.
	 *
	 * @param {number} [width=1] - The width of the line.
	 */
	setLineWidth(width = 1) {
		this.c.lineWidth = width;
	}

	/**
	 * Fills the current path on the canvas context.
	 */
	fill() {
		this.c.fill();
	}

	/**
	 * Strokes the current path on the canvas context.
	 */
	stroke() {
		this.c.stroke();
	}

	// Modifiers

	/**
	 * Saves the current state of the canvas.
	 * This method calls the save() method on the canvas context.
	 */
	save() {
		this.c.save();
	}

	/**
	 * Restores the most recently saved canvas state.
	 */
	restore() {
		this.c.restore();
	}

	/**
	 * Translates the canvas context to a new position.
	 *
	 * @param {number} [x=0] - The x-coordinate to translate to.
	 * @param {number} [y=0] - The y-coordinate to translate to.
	 */
	translate(x = 0, y = 0) {
		this.c.translate(x, y);
	}
	/**
	 * Translates the canvas context by the given vector offset.
	 *
	 * @param {vector} [offset=new vector()] - The vector by which to translate the canvas context. Defaults to a new vector with zero x and y values.
	 */
	translateV(offset = new vector()) {
		this.c.translate(offset.x, offset.y);
	}

	/**
	 * Rotates the canvas context by a given angle.
	 *
	 * @param {number} [angle=0] - The angle in radians to rotate the canvas context. Defaults to 0.
	 */
	rotate(angle = 0) {
		this.c.rotate(angle);
	}
	/**
	 * Rotates the canvas context by a specified angle.
	 *
	 * @param {number} [angle=0] - The angle in degrees to rotate the canvas context.
	 */
	rotateDeg(angle = 0) {
		this.c.rotate(angle * deg);
	}
}

export const can = new Brush();
can.resize();
can.c.textAlign = 'left';
can.c.textBaseline = 'top';
