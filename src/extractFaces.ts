import {
  detectAllFaces,
  SsdMobilenetv1Options,
  TinyFaceDetectorOptions,
} from '@vladmandic/face-api';
import { isBrowser } from 'browser-or-node';
import { Image as IJS } from 'image-js';

import type { Options } from './types';
import { loadBrowserNN } from './utils/loadBrowserNN';
import { setEnvironment } from './utils/loadNodeNN';

async function nnOptions(options: Partial<Options> = {}): Promise<Options> {
  // defaults
  const newOptions = {
    modelOptions:
      options.modelOptions || new SsdMobilenetv1Options({ minConfidence: 0.5 }),
    modelsPath: options.modelsPath || '../models',
  };
  if (isBrowser) {
    await loadBrowserNN(newOptions);
  } else {
    await setEnvironment(newOptions);
  }
  return newOptions;
}

async function extractFaces(
  inputImage: string | ArrayBuffer | Buffer | Uint8Array,
  options: Awaited<ReturnType<typeof nnOptions>>,
) {
  const image = (await IJS.load(inputImage)).getCanvas();
  const detection = await detectAllFaces(image, options.modelOptions);
  return detection;
}
export {
  extractFaces,
  nnOptions,
  SsdMobilenetv1Options,
  TinyFaceDetectorOptions,
};

/**
async function run() {
  const options = await nnOptions();
  const res = await extractFaces(
    './__tests__/images/testThreeFaces.jpg',
    options,
  );
  console.log(res);
}
run().catch((e) => console.log(e));

*/
