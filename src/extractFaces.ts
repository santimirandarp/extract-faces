import { detectAllFaces, SsdMobilenetv1Options } from '@vladmandic/face-api';
import canvas from "canvas"

import { cleanUpDetection } from './cleanUpDetection';

type LoadFrom = Parameters<typeof canvas.loadImage>[0]

/**
 * Takes an image source and the loadNN output. This will set the options for it.
 * @param inputImage -  from type supported by `ImageJS.load`
 * @param options - options for Single Shot Detection NN.
 * @returns returns the faces found in the image or `null`
 */
async function extractFaces(
  inputImage: LoadFrom,
  options?: { minConfidence: number, maxResults: number }
) {
  if (!options) options = { minConfidence: 0.5, maxResults: 10 }
  const image = await canvas.loadImage(inputImage)
  const detection = detectAllFaces(image as any, new SsdMobilenetv1Options(options))
  return cleanUpDetection(await detection);
}
export { extractFaces };
