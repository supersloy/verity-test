/* eslint-disable no-continue */
import { create } from 'zustand';
import { shuffle, slice } from 'lodash';
import { Position, Shape2D } from '../types';
import { useMainCalloutStore } from '../useMainCalloutStore';

type Shape2DInfo = {
  shape: Shape2D;
  cleansed: boolean;
  selected: boolean;
};

type SolosStore = {
  stack: {
    Left: Shape2DInfo[];
    Center: Shape2DInfo[];
    Right: Shape2DInfo[];
  };
  selectedGuardian: {
    Left?: Position;
    Center?: Position;
    Right?: Position;
  };
  gameInfo: {
    shapeSelections: number;
    guardianSelections: number;
    startTime?: Date;
    endTime?: Date;
    isCorrect: boolean;
  };
};

const useSolosStore = create<SolosStore>(() => ({
  stack: getRandomStacks(),
  selectedGuardian: {},
  gameInfo: {
    shapeSelections: 0,
    guardianSelections: 0,
    isCorrect: false,
  },
}));

function getRandomStacks() {
  let commonStack = ['Circle', 'Square', 'Triangle', 'Circle', 'Square', 'Triangle'] as Shape2D[];
  const mainShapes = useMainCalloutStore.getState();
  while (true) {
    commonStack = shuffle(commonStack);
    if (commonStack[0] === commonStack[1] && commonStack[0] !== mainShapes.Left) continue;
    if (commonStack[2] === commonStack[3] && commonStack[2] !== mainShapes.Center) continue;
    if (commonStack[4] === commonStack[5] && commonStack[4] !== mainShapes.Right) continue;
    break;
  }
  function shapeToInfo(shape: Shape2D): Shape2DInfo {
    return { shape, cleansed: false, selected: false };
  }

  const newStack = {
    Left: slice(commonStack, 0, 2).map((shape) => shapeToInfo(shape)),
    Center: slice(commonStack, 2, 4).map((shape) => shapeToInfo(shape)),
    Right: slice(commonStack, 4, 6).map((shape) => shapeToInfo(shape)),
  };

  return newStack;
}

function startSolos() {
  useSolosStore.setState((state) => ({ ...state, stack: getRandomStacks(), selectedGuardian: {} }));
}

export { useSolosStore, getRandomStacks, startSolos };
export type { Shape2DInfo };
