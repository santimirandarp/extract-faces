import {
  detectAllFaces,
  SsdMobilenetv1Options,
  TinyFaceDetectorOptions,
} from '@vladmandic/face-api';
import { Image as IJS } from 'image-js';

import { cleanUpDetection } from './cleanUpDetection';
import { type LoadNN } from './loadNeuralNet';

type LoadFrom = Parameters<typeof IJS.load>[0];

/**
 * Takes an image source and the async function that will load the NN and
 * set the options for it. And returns the faces found in the image or `[]`
 * @param inputImage
 * @param options
 * @returns
 */
async function extractFaces(
  inputImage: LoadFrom,
  options: Awaited<ReturnType<LoadNN>>,
) {
  const image = (await IJS.load(inputImage)).getCanvas();
  const detection = await detectAllFaces(image, options.modelOptions);
  return cleanUpDetection(detection);
}

export { extractFaces, SsdMobilenetv1Options, TinyFaceDetectorOptions };
