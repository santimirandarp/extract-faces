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

/**
 *
 * @param detection - Coordinates from `detectAllFaces`
 * @returns - Clean coords from face(s) or `null`. Returning `null`
 * avoids truthy value coming from `[]`.
 */
export function cleanUpDetection(
  detection: OldFaceDetails,
): FaceDetails[] | null {
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
  return simplerObject.length > 0 ? simplerObject : null;
}
