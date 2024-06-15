import { IconUser } from '@tabler/icons-react';
import { useMemo } from 'react';
import { selectGuardian } from '@/store/Solos/select.actions';
import { Position } from '@/store/types';
import { SelectableIcon } from '../SelectableIcon';
import { useSolosStore } from '@/store/Solos/useSolosStore';
import { isGuardianSelectable } from '@/store/Solos/selectableIndicators';

type GuardianButtonProps = {
  position: Position;
  guardian: Position;
};

function GuardianButton({ position, guardian }: GuardianButtonProps) {
  const isSelected = useSolosStore((state) => state.selectedGuardian[position] === guardian);
  const stack = useSolosStore((state) => state.stack[position]);
  const selectable = useMemo(() => isGuardianSelectable(position), [stack]);

  return (
    <SelectableIcon
      size="xl"
      disabled={position === guardian || !selectable}
      onClick={selectGuardian.bind(null, position, guardian)}
      selected={isSelected}
    >
      <IconUser />
    </SelectableIcon>
  );
}

export { GuardianButton };
