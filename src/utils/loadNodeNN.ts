import {
  TinyFaceDetectorOptions,
  SsdMobilenetv1Options,
  env,
  nets,
} from '@vladmandic/face-api';
import { Canvas, Image, ImageData } from 'canvas';

import type { Options } from '../types';

/**
 * Modifies global settings
 * @param opts - FaceDetectionOptions
 * @param models - absolute path to models
 * @returns
 */
export async function setEnvironment(opts: Options) {
  monkeyPatch();
  await loadNetNode(opts);
}

async function loadNetNode(opts: Options) {
  const { modelOptions, modelsPath } = opts;
  if (modelOptions instanceof TinyFaceDetectorOptions) {
    await nets.tinyFaceDetector.loadFromDisk(modelsPath);
  } else if (modelOptions instanceof SsdMobilenetv1Options) {
    await nets.ssdMobilenetv1.loadFromDisk(modelsPath);
  } else {
    throw new Error('No NN found in options');
  }
}

function monkeyPatch() {
  env.monkeyPatch({ Canvas, Image, ImageData } as any);
}
