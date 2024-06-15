/* eslint-disable no-continue */
import { Position, Shape } from '../types';
import { get3DShapeFromBases } from '../utils';
import { Shape2DInfo, useSolosStore } from './useSolosStore';
import { useMainCalloutStore } from '../useMainCalloutStore';

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

function handOverShape(from: Position, to: Position, shapeIndex: number) {
  const shape = useSolosStore.getState().stack[from][shapeIndex];
  removeFromStack(from, shapeIndex);
  appendToStack(to, shape);
}

function isStackCorrect(position: Position): boolean {
  const stack = useSolosStore.getState().stack[position];
  if (stack.length !== 2) return false;
  const mainShape = useMainCalloutStore.getState()[position];
  if (new Set([mainShape, ...stack.map((s) => s.shape)]).size !== 3) return false;
  if (stack.filter((s) => !s.cleansed).length !== 0) return false;
  return true;
}

function isGuardianCorrect(position: Position): boolean {
  const stackCorrect = isStackCorrect(position);
  if (!stackCorrect) return false;
  const stack = useSolosStore.getState().stack[position];
  return stack.filter((s) => s.selected).length === 2;
}

export {
  appendToStack,
  removeFromStack,
  getSelectedShape,
  getPositionInfo,
  handOverShape,
  isStackCorrect,
  isGuardianCorrect,
};
