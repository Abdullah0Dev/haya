import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-react-native';

export const loadPoseModel = async () => {
  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, {
    modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
  });
  console.log('Pose detection model loaded successfully');
  return detector;
};
