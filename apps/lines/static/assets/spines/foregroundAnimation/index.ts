import { createAsset } from 'pixi-svelte';

import img from './mineslot.webp';
import rawAtlas from './mineslot.atlas?raw';
import spine from './mineslot.json';

export default createAsset({ img, rawAtlas, spine, preload: true });