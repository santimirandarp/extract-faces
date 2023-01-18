import type {
  SsdMobilenetv1Options,
  TinyFaceDetectorOptions,
} from '@vladmandic/face-api';

/**
 * Options for the extractFaces function
 */
export interface Options {
  /**
   * @defaultValue new SsdMobilenetv1Options({ minConfidence: 0.5 })
   */
  modelOptions: NetOptions;
  /**
   * @defaultValue './models'
   * Which model to take will be defined by the options you set (this is just the path)
   * to a folder where the model files are stored.
   */
  modelsPath: string;
}

export type NetOptions = SsdMobilenetv1Options | TinyFaceDetectorOptions;
