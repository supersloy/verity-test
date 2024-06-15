import { create } from 'zustand';
import { shuffle } from 'lodash-es';
import { Position, Shape2D } from './types';
import { shapes2D } from './utils';

type MainCalloutStore = {
  Left: Shape2D;
  Center: Shape2D;
  Right: Shape2D;
};

const useMainCalloutStore = create<MainCalloutStore>(getRandomLayout);

function getRemainingShapes(): Shape2D[] {
  const { Left, Center, Right } = useMainCalloutStore.getState();
  const remainingShapes = shapes2D.filter(
    (shape) => shape !== Left && shape !== Center && shape !== Right
  );
  return remainingShapes;
}

function setRandomLayout() {
  useMainCalloutStore.setState(getRandomLayout);
}

function getRandomLayout(): MainCalloutStore {
  const permutation = shuffle(shapes2D);
  return {
    Left: permutation[0],
    Center: permutation[1],
    Right: permutation[2],
  };
}

function setShape(shape: Shape2D, position: Position) {
  useMainCalloutStore.setState((state) => ({ ...state, [position]: shape }));
}

function removeShape(position: Position) {
  useMainCalloutStore.setState((state) => ({ ...state, [position]: undefined }));
}

export { useMainCalloutStore, getRemainingShapes, setShape, removeShape, setRandomLayout };
