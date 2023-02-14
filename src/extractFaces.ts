import { readFile } from 'fs/promises';

import * as tf from '@tensorflow/tfjs-node';
import { detectAllFaces, SsdMobilenetv1Options } from '@vladmandic/face-api';

import { cleanUpDetection } from './cleanUpDetection';
import { type LoadNN } from './loadNeuralNet';

type LoadFrom = Parameters<typeof readFile>[0]

/**
 * Takes an image source and the loadNN output. This will set the options for it.
 * @param inputImage -  from type supported by `ImageJS.load`
 * @param options
 * @returns returns the faces found in the image or `[]`
 */
async function extractFaces(
  inputImage: LoadFrom,
  options: Awaited<ReturnType<LoadNN>>,
) {
  if (inputImage) {
    const image = tf.node.decodeImage(await readFile(inputImage))
    const detection = await detectAllFaces(image as any, options.modelOptions);
    return cleanUpDetection(detection);
  }
}

export { extractFaces, SsdMobilenetv1Options };
