import { createAsset } from 'pixi-svelte';

// import img from './blocks.webp';
// import atlas from './blocks.json';

import img from './bonus.png';
import rawAtlas from './bonus.atlas?raw';
import spine from './bonus.json';

export default createAsset({ img, rawAtlas, spine, preload: true });