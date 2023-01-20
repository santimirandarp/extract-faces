import {
  SsdMobilenetv1Options,
  TinyFaceDetectorOptions,
  nets,
  env,
} from '@vladmandic/face-api';
import { isBrowser } from 'browser-or-node';
import { Canvas, Image, ImageData } from 'canvas';

/**
 * Options for the extractFaces function
 */
interface Options {
  /**
   * @defaultValue new SsdMobilenetv1Options({ minConfidence: 0.5 })
   */
  modelOptions: SsdMobilenetv1Options | TinyFaceDetectorOptions;
  /**
   * @defaultValue './models'
   * Which model to take will be defined by the options you set (this is just the path)
   * to a folder where the model files are stored.
   */
  modelsPath: string;
}

export type LoadNN = typeof loadNNForBrowserOrNode;
/**
 * Loads the neural network and sets the options for it
 * The way it does depends on the environment.
 * @param options - Options
 * @returns
 */
export async function loadNNForBrowserOrNode(
  options: Partial<Options> = {},
): Promise<Options> {
  // defaults
  const newOptions = {
    modelOptions:
      options.modelOptions || new SsdMobilenetv1Options({ minConfidence: 0.5 }),
    modelsPath: options.modelsPath || '../models',
  };
  if (isBrowser) {
    await forBrowser(newOptions);
  } else {
    await setEnvironment(newOptions);
  }
  return newOptions;
}

async function setEnvironment(opts: Options) {
  env.monkeyPatch({ Canvas, Image, ImageData } as any);
  await forNode(opts);
}

async function forBrowser(opts: Options) {
  const { modelOptions, modelsPath } = opts;
  if (modelOptions instanceof TinyFaceDetectorOptions) {
    await nets.tinyFaceDetector.loadFromUri(modelsPath);
  } else if (modelOptions instanceof SsdMobilenetv1Options) {
    await nets.ssdMobilenetv1.loadFromUri(modelsPath);
  } else {
    throw new Error('No NN found in options');
  }
}

async function forNode(opts: Options) {
  const { modelOptions, modelsPath } = opts;
  if (modelOptions instanceof TinyFaceDetectorOptions) {
    await nets.tinyFaceDetector.loadFromDisk(modelsPath);
  } else if (modelOptions instanceof SsdMobilenetv1Options) {
    await nets.ssdMobilenetv1.loadFromDisk(modelsPath);
  } else {
    throw new Error('No NN found in options');
  }
}
