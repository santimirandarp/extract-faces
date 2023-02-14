import { readFile } from 'node:fs/promises';

import * as tf from '@tensorflow/tfjs-node';
import { SsdMobilenetv1Options, detectAllFaces } from '@vladmandic/face-api';

import { cleanUpDetection } from './cleanUpDetection';

type LoadFrom = Parameters<typeof readFile>[0];

/**
 * Takes an image source and the loadNN output. This will set the options for it.
 * @param inputImage -  from type supported by `ImageJS.load`
 * @param options - options for Single Shot Detection NN.
 * @returns returns the faces found in the image or `null`
 */
async function extractFaces(
  inputImage: LoadFrom,
  options?: { minConfidence: number; maxResults: number },
) {
  if (!options) options = { minConfidence: 0.3, maxResults: 5 };
  const image = await readFile(inputImage);
  const tensor = tf.node.decodeImage(image);
  const detection = await detectAllFaces(
    tensor as any,
    new SsdMobilenetv1Options(options),
  );
  return cleanUpDetection(detection);
}
export { extractFaces };
