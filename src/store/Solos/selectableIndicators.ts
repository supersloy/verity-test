import { Position } from '../types';
import { is2D } from '../utils';
import { getSelectedShape } from './utils';

function isShapeSelectable(position: Position): boolean {
  const shape = getSelectedShape(position);
  return shape == null || is2D(shape);
}
function isGuardianSelectable(position: Position): boolean {
  const selectedShape = getSelectedShape(position);
  return selectedShape != null;
}

export { isShapeSelectable, isGuardianSelectable };
