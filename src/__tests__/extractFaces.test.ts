import { join } from 'path';

import { type FaceDetection } from '@vladmandic/face-api';
import * as ijs from 'image-js';
import { describe, it, expect } from 'vitest';

import { extractFaces } from '../extractFaces';
import { loadNN } from '../loadNeuralNet';

describe('test detectors', () => {
  const modelsPath = join(__dirname, '../..', 'models');
  const imgPath = join(__dirname, './images');
  it('should return a cleaned up detection object', async () => {
    const myImg = join(imgPath, 'testThreeFaces.jpg');
    await loadNN(modelsPath);
    const detection = (await extractFaces(myImg)) as FaceDetection[];
    expect(detection).toHaveLength(3);
    const {
      box: { x, y, width, height },
      score,
    } = detection[0];
    expect(x).toBeCloseTo(66.778);
    expect(y).toBeCloseTo(33.668);
    expect(width).toBeCloseTo(117.115);
    expect(height).toBeCloseTo(119.819);
    expect(score).toBeCloseTo(0.9526);

    //write out
    let r = await ijs.read(myImg);
    for (let {
      box: { x, y, width, height },
    } of detection) {
      r = r.drawRectangle({
        origin: { row: Math.round(y), column: Math.round(x) },
        width: Math.round(width),
        height: Math.round(height),
        strokeColor: [125, 0, 0],
      });
    }
    await ijs.write(join(imgPath, './result.jpg'), r);
  });
});
