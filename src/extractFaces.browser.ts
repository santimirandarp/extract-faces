import { detectAllFaces, SsdMobilenetv1Options } from '@vladmandic/face-api';

import { cleanUpDetection } from './cleanUpDetection';

type LoadFrom = HTMLCanvasElement | HTMLImageElement;

/**
 * Takes an image source and the loadNN output. This will set the options for it.
 * @param inputImage -  from type supported by `ImageJS.load`
 * @param options
 * @returns returns the faces found in the image or `[]`
 */
async function extractFaces(
  inputImage: LoadFrom,
  options: { minConfidence?: number, maxResults?: number }
) {
  if (!options) options = { minConfidence: 0.5, maxResults: 10 }
  const detection = await detectAllFaces(inputImage, new SsdMobilenetv1Options(options))
  return cleanUpDetection(detection);
}

export { extractFaces };
