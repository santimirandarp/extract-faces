import { join } from 'path';

import tf from '@tensorflow/tfjs-node';
import { describe, it, expect } from 'vitest';

import { extractFaces, nnOptions } from '../extractFaces';

describe('test detectors', () => {
  const modelsPath = join(__dirname, '../..', 'models');
  const imgPath = join(__dirname, './images');
  it('should return a detection object', async () => {
    const myImg = join(imgPath, 'testThreeFaces.jpg');
    const options = await nnOptions({ modelsPath });
    const result = await extractFaces(myImg, options);
    console.log(result);
    expect(result).toBeDefined();
  });
});
