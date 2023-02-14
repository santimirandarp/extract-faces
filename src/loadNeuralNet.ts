import { SsdMobilenetv1Options, nets, env } from '@vladmandic/face-api';
import { Canvas, Image, ImageData } from 'canvas';

/**
 * Options for the extractFaces function
 */
interface Options {
  /**
   * @defaultValue new SsdMobilenetv1Options({ minConfidence: 0.5 })
   */
  modelOptions: SsdMobilenetv1Options;
  /**
   * @defaultValue './models'
   * Which model to take will be defined by the options you set (this is just the path)
   * to a folder where the model files are stored.
   */
  modelsPath: string;
}

export type LoadNN = typeof loadNN;
/**
 * Loads the neural network for a specific environment.
 * @param options - Options
 * @returns
 */
export async function loadNN(options: Partial<Options> = {}): Promise<Options> {
  // defaults
  const newOptions = {
    modelOptions:
      options.modelOptions || new SsdMobilenetv1Options({ minConfidence: 0.5 }),
    modelsPath: options.modelsPath || '../models',
  };
  await nodeNN(newOptions);
  return newOptions;
}

async function nodeNN(opts: Options) {
  env.monkeyPatch({ Canvas, Image, ImageData } as any);
  const { modelOptions, modelsPath } = opts;
  if (modelOptions instanceof SsdMobilenetv1Options) {
    await nets.ssdMobilenetv1.loadFromDisk(modelsPath);
  } else {
    throw new Error('No NN found in options');
  }
}
