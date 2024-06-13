import { Shape2D } from '@/store/types';
import { ActionIcon } from './ActionIcon';
import { IconMapping } from '@/store/utils';

type GuardianStackShapeProps = {
  shape2D?: Shape2D;
};

export function GuardianStackShape({ shape2D }: GuardianStackShapeProps) {
  if (shape2D != null) {
    const ShapeIcon = IconMapping[shape2D];
    return (
      <ActionIcon>
        <ShapeIcon />
      </ActionIcon>
    );
  }
  return <ActionIcon disabled></ActionIcon>;
}
