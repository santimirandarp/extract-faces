import type { detectAllFaces } from '@vladmandic/face-api';

type OldFaceDetails = Awaited<ReturnType<typeof detectAllFaces>>;
type FaceDetails = {
  box: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  score: number;
};

export function cleanUpDetection(detection: OldFaceDetails): FaceDetails[] {
  const simplerObject: FaceDetails[] = [];
  for (const face of detection) {
    simplerObject.push({
      box: {
        x: face.box.x,
        y: face.box.y,
        width: face.box.width,
        height: face.box.height,
      },
      score: face.score,
    });
  }
  return simplerObject;
}
