import { create } from 'zustand';
import { shuffle } from 'lodash-es';
import { Shape2D } from './types';
import { shapes2D } from './utils';

type MainCalloutStore = {
  left: Shape2D;
  center: Shape2D;
  right: Shape2D;
};

const useMainCalloutStore = create<MainCalloutStore>(getRandomLayout);

function getRemainingShapes(): Shape2D[] {
  const { left, center, right } = useMainCalloutStore.getState();
  const remainingShapes = shapes2D.filter(
    (shape) => shape !== left && shape !== center && shape !== right
  );
  return remainingShapes;
}

function setRandomLayout() {
  useMainCalloutStore.setState(getRandomLayout);
}

function getRandomLayout() {
  const permutation = shuffle(shapes2D);
  return {
    left: permutation[0],
    center: permutation[1],
    right: permutation[2],
  };
}

function setShape(shape: Shape2D, position: 'left' | 'center' | 'right') {
  useMainCalloutStore.setState((state) => ({ ...state, [position]: shape }));
}

function removeShape(position: 'left' | 'center' | 'right') {
  useMainCalloutStore.setState((state) => ({ ...state, [position]: undefined }));
}

export {
  useMainCalloutStore,
  getRemainingShapes,
  setShape,
  removeShape,
  setRandomLayout,
  getRandomLayout,
};
