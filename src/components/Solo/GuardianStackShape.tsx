import { useCallback } from 'react';
import { Position } from '@/store/types';
import { SelectableIcon } from '../ActionIcon';
import { IconMapping } from '@/store/utils';
import { selectShape } from '@/store/Solos/select.actions';
import { useSolosStore } from '@/store/Solos/useSolosStore';
import { isShapeSelectable } from '@/store/Solos/selectableIndicators';

type GuardianStackShapeProps = {
  index: number;
  position: Position;
};

export function GuardianStackShape({ index, position }: GuardianStackShapeProps) {
  const shapeInfo = useSolosStore((state) => state.stack[position][index]);
  const onClick = useCallback(() => {
    selectShape(position, index);
  }, []);
  const selectable = isShapeSelectable(position);

  if (shapeInfo?.shape != null) {
    const ShapeIcon = IconMapping[shapeInfo.shape];
    return (
      <SelectableIcon onClick={onClick} selected={shapeInfo.selected} disabled={!selectable}>
        <ShapeIcon />
      </SelectableIcon>
    );
  }
  return <SelectableIcon disabled></SelectableIcon>;
}
