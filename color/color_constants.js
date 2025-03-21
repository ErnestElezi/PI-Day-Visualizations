import { Color } from './color.js';

export const hexPalette = [
	'#2a1e23',
	'#36282b',
	'#483b3d',
	'#594d4d',
	'#6d5b59',
	'#886e6a',
	'#a58b83',
	'#bda499',
	'#cebbae',
	'#ddcebf',
	'#f1ebdb',
	'#f1b7ac',
	'#f2847e',
	'#f35151',
	'#be3939',
	'#892222',
	'#702020',
	'#572020',
	'#243c72',
	'#2b4e95',
	'#286eb4',
	'#2789cd',
	'#42bfe8',
	'#73efe8',
	'#aeeee2',
	'#fff089',
	'#fbd95f',
	'#f8c53a',
	'#f5a430',
	'#f38428',
	'#f1641f',
	'#b9451d',
	'#9b3a1e',
	'#7e301f',
	'#6e2b21',
	'#612721',
	'#4f2320',
	'#3e1f1f',
	'#1a1e31',
	'#1b2447',
	'#382f64',
	'#553b81',
	'#72469e',
	'#9052bc',
	'#b66cbb',
	'#d480bb',
	'#db9ac3',
	'#e2b5cb',
	'#e9d0d3',
	'#f4edd8',
	'#e8cfca',
	'#ddb5bd',
	'#d39ab0',
	'#c881a5',
	'#be679a',
	'#ab5884',
	'#974b71',
	'#843e5d',
	'#6d3249',
	'#552737',
	'#3e1b23',
	'#271111',
	'#0d0d0c',
	'#171516',
	'#1f212c',
	'#282c3c',
	'#3d3f53',
	'#53526a',
	'#696682',
	'#827f98',
	'#9b99ae',
	'#b3b3c3',
	'#d1cece',
	'#f4ecd8',
	'#bcd8b8',
	'#86c69a',
	'#77b08c',
	'#639579',
	'#57846c',
	'#4d725e',
	'#426150',
	'#375042',
	'#2c3f34',
	'#222d26',
	'#181c18',
	'#272d1f',
	'#333c24',
	'#4b5330',
	'#61683a',
	'#7a7e40',
	'#939446',
	'#aea850',
	'#c6b858',
	'#dbcb75',
	'#efdd91',
	'#e8caa6',
	'#e2b27e',
	'#d89557',
	'#c96e23',
	'#a0581e',
	'#774319',
	'#4e2d14',
	'#3a2312',
	'#251810',
	'#18120d',
	'#291812',
	'#422217',
	'#592b1b',
	'#703420',
	'#893c22',
	'#be5a39',
	'#d0855b',
];

export const palette = [];
for (const color of hexPalette) {
	palette.push(new Color().set_hex(color));
}
