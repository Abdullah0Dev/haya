import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export const initializeTensorFlow = async () => {
  try {
    await tf.ready();
    console.log('TensorFlow.js initialized successfully');
  } catch (error) {
    console.error('Error initializing TensorFlow.js:', error);
  }
};
