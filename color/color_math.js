import { lerp } from '../vector/vector_math.js';
import { Color } from './color.js';

export function lerp_color(color0 = new Color(), color1 = new Color()) {
	return new Color(lerp(color0.r, color1.r, t), lerp(color0.g, color1.g, t), lerp(color0.b, color1.b, t), lerp(color0.a, color1.a, t));
}


