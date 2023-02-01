import { join } from 'path';

import { FaceDetection } from '@vladmandic/face-api';
import { describe, it, expect } from 'vitest';

import { extractFaces } from '../extractFaces';
import { loadNNForBrowserOrNode } from '../loadNeuralNet';

describe('test detectors', () => {
  const modelsPath = join(__dirname, '../..', 'models');
  const imgPath = join(__dirname, './images');
  it('should return a cleaned up detection object', async () => {
    const myImg = join(imgPath, 'testThreeFaces.jpg');
    const options = await loadNNForBrowserOrNode({ modelsPath });
    const result = (await extractFaces(myImg, options)) as FaceDetection[];
    expect(result).toHaveLength(3);
    const {
      box: { x, y, width, height },
      score,
    } = result[0];
    expect(x).toBeCloseTo(70.56989809634749);
    expect(y).toBeCloseTo(33.42865779995918);
    expect(width).toBeCloseTo(113.40223568555547);
    expect(height).toBeCloseTo(119.53723356127739);
    expect(score).toBeCloseTo(0.9686242341995239);
  });
});
