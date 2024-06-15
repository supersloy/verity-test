import { shuffle, slice } from 'lodash';
import { Position, Shape, Shape2D } from '../types';
import { get3DShapeFromBases } from '../utils';
import { Shape2DInfo, useSolosStore } from './useSolosStore';

function appendToStack(recieverGuardian: Position, shape: Shape2DInfo) {
  useSolosStore.setState((state) => ({
    ...state,
    stack: {
      ...state.stack,
      [recieverGuardian]: [...state.stack[recieverGuardian], shape],
    },
  }));
}

function removeFromStack(senderGuardian: Position, index: number) {
  useSolosStore.setState((state) => ({
    ...state,
    stack: {
      ...state.stack,
      [senderGuardian]: state.stack[senderGuardian].filter((_, i) => i !== index),
    },
  }));
}

function getPositionInfo(position: Position) {
  const state = useSolosStore.getState();
  return {
    stack: state.stack[position],
    selectedGuardian: state.selectedGuardian[position],
  };
}

function getSelectedShape(position: Position): Shape | undefined {
  const positionInfo = getPositionInfo(position);
  const selectedBases = positionInfo.stack.filter((shape) => shape.selected);

  if (selectedBases.length === 0) return undefined;
  if (selectedBases.length === 1) return selectedBases[0].shape;
  const [base1, base2] = selectedBases;
  return get3DShapeFromBases([base1.shape, base2.shape]);
}

function generateRandomStacks() {
  let commonStack = ['Circle', 'Square', 'Triangle', 'Circle', 'Square', 'Triangle'] as Shape2D[];
  commonStack = shuffle(commonStack);

  function shapeToInfo(shape: Shape2D, position: Position): Shape2DInfo {
    return { shape, origin: position, selected: false };
  }

  const newStack = {
    Left: slice(commonStack, 0, 2).map((shape) => shapeToInfo(shape, 'Left')),
    Center: slice(commonStack, 2, 4).map((shape) => shapeToInfo(shape, 'Center')),
    Right: slice(commonStack, 4, 6).map((shape) => shapeToInfo(shape, 'Right')),
  };
  useSolosStore.setState((state) => ({ ...state, stack: newStack }));
}

function handOverShape(from: Position, to: Position, shapeIndex: number) {
  const shape = useSolosStore.getState().stack[from][shapeIndex];
  removeFromStack(from, shapeIndex);
  appendToStack(to, shape);
}

export {
  appendToStack,
  removeFromStack,
  getSelectedShape,
  getPositionInfo,
  generateRandomStacks,
  handOverShape,
};
