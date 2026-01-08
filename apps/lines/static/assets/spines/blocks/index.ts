import { createAsset } from 'pixi-svelte';

import img from './blocks.png';
import rawAtlas from './blocks.atlas?raw';
import spine from './blocks.json';

export default createAsset({ img, rawAtlas, spine });