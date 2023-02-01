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
 * Takes an image source and the loadNN output. This will set the options for it.
 * @param inputImage -  from type supported by `ImageJS.load`
 * @param options
 * @returns returns the faces found in the image or `[]`
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
