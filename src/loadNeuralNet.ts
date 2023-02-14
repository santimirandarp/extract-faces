import { nets, env } from '@vladmandic/face-api';
import { Canvas, Image, ImageData } from 'canvas';

export type LoadNN = typeof loadNN;
/**
 * Loads the neural network for a specific environment.
 * @param path - path to the NN directory (not file)
 */
export async function loadNN(path = './models') {
  env.monkeyPatch({ Canvas, Image, ImageData } as any);
  await nets.ssdMobilenetv1.loadFromDisk(path);
}
