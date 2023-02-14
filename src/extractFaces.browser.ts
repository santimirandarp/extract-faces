import { detectAllFaces, SsdMobilenetv1Options } from '@vladmandic/face-api';

import { cleanUpDetection } from './cleanUpDetection';
import { type LoadNN } from './loadNeuralNet';

type LoadFrom = HTMLCanvasElement | HTMLImageElement

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
  const detection = await detectAllFaces(inputImage, options.modelOptions);
  return cleanUpDetection(detection);
}

export { extractFaces, SsdMobilenetv1Options };
