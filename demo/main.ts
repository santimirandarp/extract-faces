// eslint-disable-next-line import/no-unassigned-import
import './assets/scss/index.scss';
import {
  extractFaces as extractFacesBrowser,
  nnOptions as nnOptionsBrowser,
  TinyFaceDetectorOptions,
} from '../src/index';

//@ts-expect-error not a module
import img from './assets/images/testThreeFaces.jpg';

async function run() {
  const newImg = new Image();
  newImg.src = img;
  document.body.appendChild(newImg);
  const options = await nnOptionsBrowser({
    modelOptions: new TinyFaceDetectorOptions({ scoreThreshold: 0.5 }),
    modelsPath: './models',
  });
  const result = await extractFacesBrowser(
    './assets/images/testThreeFaces.jpg',
    options,
  );

  const p = document.createElement('p');
  p.innerText = JSON.stringify(result, null, 4);
  p.classList.add('json');
  document.body.appendChild(p);
}

run().catch((e) => console.error(e));
