import {
  extractFaces as extractFacesBrowser,
  nnOptions as nnOptionsBrowser,
  TinyFaceDetectorOptions,
} from '../lib-esm/index';

async function run() {
  const options = await nnOptionsBrowser({
    modelOptions: new TinyFaceDetectorOptions({ scoreThreshold: 0.5 }),
    modelsPath: './models',
  });
  const result = await extractFacesBrowser(
    './images/testThreeFaces.jpg',
    options,
  );

  const p = document.createElement('p');
  p.innerText = JSON.stringify(result);
  document.body.appendChild(p);
}

run().catch((e) => console.error(e));
