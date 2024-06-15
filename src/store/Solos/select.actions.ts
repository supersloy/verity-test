import { cloneDeep } from 'lodash';
import { Position } from '../types';
import { useSolosStore } from './useSolosStore';
import { getPositionInfo, handOverShape } from './utils';

function selectShape(position: Position, stackIndex: number) {
  const positionInfo = getPositionInfo(position);
  if (positionInfo.selectedGuardian) return;
  const newShape = positionInfo.stack[stackIndex];
  newShape.selected = true;
  useSolosStore.setState((state) => ({
    ...state,
    stack: { ...state.stack, [position]: cloneDeep(positionInfo.stack) },
  }));
}

function selectGuardian(position: Position, guardian: Position) {
  const { stack, selectedGuardian } = getPositionInfo(position);
  if (selectedGuardian) return;
  useSolosStore.setState((state) => ({ ...state, selectedGuardian: { [position]: guardian } }));
  setTimeout(() => {
    const selected = stack.map((shape) => shape.selected);
    const selectedIndexes = [] as number[];
    for (let i = 0; i < selected.length; i += 1) {
      if (selected[i]) {
        selectedIndexes.push(i);
        stack[i].selected = false;
      }
    }
    if (selectedIndexes.length === 1) {
      stack[selectedIndexes[0]].cleansed = true;
    }
    useSolosStore.setState((state) => ({
      ...state,
      selectedGuardian: { [position]: undefined },
      stack: { ...state.stack, [position]: cloneDeep(stack) },
    }));
    if (selectedIndexes.length === 1) {
      handOverShape(position, guardian, selectedIndexes[0]);
    }
  }, 250);
}

export { selectShape, selectGuardian };
