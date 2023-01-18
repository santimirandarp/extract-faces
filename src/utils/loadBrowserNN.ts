import {
  TinyFaceDetectorOptions,
  SsdMobilenetv1Options,
  nets,
} from '@vladmandic/face-api';

import type { Options } from '../types';

export async function loadBrowserNN(opts: Options) {
  const { modelOptions, modelsPath } = opts;
  if (modelOptions instanceof TinyFaceDetectorOptions) {
    await nets.tinyFaceDetector.loadFromUri(modelsPath);
  } else if (modelOptions instanceof SsdMobilenetv1Options) {
    await nets.ssdMobilenetv1.loadFromUri(modelsPath);
  } else {
    throw new Error('No NN found in options');
  }
}
