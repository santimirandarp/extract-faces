# extract-faces

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Very simple library to extract faces from images using [face-api.js](https://github.com/vladmandic/face-api)

Extracts location (coordinates) of faces on images.

## Installation

`npm i extract-faces`

To use with Node JS it needs `npm i @tensorflow/tfjs-node canvas` as well.

## Example (Browser or Node)

```js
import { extractFaces, loadNN } from 'extract-faces';

async function run(){
  await loadNN("./path/") //the NN is in the "/models" folder
  const detections = await extractFaces('./testThreeFaces.jpg');
  console.log(detections); //sample output below
};

run()
```

## Result example

Inputting `.jpg` image with three faces

```javascript
[
  {
    box: {
      x: 70.56989809634749,
      y: 33.42865779995918,
      width: 113.40223568555547,
      height: 119.53723356127739,
    },
    score: 0.9686242341995239,
  },
  {
    box: {
      x: 68.11937841152515,
      y: 86.75163015723228,
      width: 30.880290280339302,
      height: 37.48519569635391,
    },
    score: 0.7888553142547607,
  },
  {
    box: {
      x: 1.5452960509358962,
      y: 104.92549985647202,
      width: 57.86328758172625,
      height: 71.66649997234344,
    },
    score: 0.6099629402160645,
  },
];
```

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
