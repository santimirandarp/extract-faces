import { join } from 'path';

import { FaceDetection } from '@vladmandic/face-api';
import * as IJS from 'image-js';
import { describe, it, expect } from 'vitest';

import { extractFaces } from '../extractFaces';
import { loadNN } from '../loadNeuralNet';

describe('test detectors', () => {
  const modelsPath = join(__dirname, '../..', 'models');
  const imgPath = join(__dirname, './images');
  it('should return a cleaned up detection object', async () => {
    const myImg = join(imgPath, 'testThreeFaces.jpg');
    await loadNN(modelsPath);
    const result = (await extractFaces(myImg)) as FaceDetection[];
    expect(result).toHaveLength(3);
    const {
      box: { x, y, width, height },
      score,
    } = result[0];
    expect(x).toBeCloseTo(68.114);
    expect(y).toBeCloseTo(34.468);
    expect(width).toBeCloseTo(115.478);
    expect(height).toBeCloseTo(119.698);
    expect(score).toBeCloseTo(0.9526);
    //write out
    let ijsImage = await IJS.read(myImg);

    for (let { box: { x, y, width, height } } of result) {
      ijsImage = ijsImage.drawRectangle({
        origin: { row: Math.round(x), column: Math.round(y) },
        width: Math.round(width),
        height: Math.round(height)
      })
    }

    await IJS.write(join(imgPath, 'testThreeFacesOut.jpg'), ijsImage)
  });
});
