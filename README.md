# extract-faces

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Extract location (coordinates) of faces on images.

Package still being written but it is already tested.

## Installation

`$ npm i extract-faces`

## Example of usage (Browser or NodeJS)

```js
import {
  extractFaces,
  loadNeuralNetForBrowserOrNode as loadNN,
  SsdMobilenetv1Options, // this also specifies which NN to load from ./models
  TinyFaceDetectorOptions, // ditto
} from 'extract-faces';

// specify path to models and NN+options
const loadOptions = {
  modelOptions: new SsdMobilenetv1Options({ minConfidence: 0.36 }),
  modelsPath: '../models',
};

// run the code
loadNeuralNetForBrowserOrNode(loadOptions).then(async (netOptions) => {
  // possible to loop over images here
  const detections = await extractFaces('path/toImage.jpg', options);
  // log detections ( x, y, width, height, score )
  console.log(detections);
});
```

- You will need the [models](./models) and pass the path to the NN loader

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/extract-faces.svg
[npm-url]: https://www.npmjs.com/package/extract-faces
[ci-image]: https://github.com/santimirandarp/extract-faces/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/santimirandarp/extract-faces/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/santimirandarp/extract-faces.svg
[codecov-url]: https://codecov.io/gh/santimirandarp/extract-faces
[download-image]: https://img.shields.io/npm/dm/extract-faces.svg
[download-url]: https://www.npmjs.com/package/extract-faces
