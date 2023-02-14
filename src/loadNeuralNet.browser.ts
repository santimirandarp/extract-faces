import { nets } from '@vladmandic/face-api';

export type LoadNN = typeof loadNN;
/**
 * Loads the neural network for a specific environment.
 * @param options - Options
 * @returns
 */
export async function loadNN(uri: string) {
  await nets.ssdMobilenetv1.loadFromUri(uri);
}
