import { Center, Paper, Stack, Title } from '@mantine/core';
import { useMemo } from 'react';
import { Position } from '@/store/types';
import { GuardianButton } from '../GuardianButton';
import { positions } from '@/store/utils';
import { GuardianStack } from '../GuardianStack';
import classes from './GuardainSolo.module.css';
import { useSolosStore } from '@/store/Solos/useSolosStore';
import { isGuardianCorrect } from '@/store/Solos/utils';

type SoloGuardianProps = {
  position: Position;
};

export function GuardianSolo({ position }: SoloGuardianProps) {
  const stack = useSolosStore((state) => state.stack[position]);
  const isCorrect = useMemo(() => isGuardianCorrect(position), [stack, position]);

  return (
    <Paper withBorder display="inline-block" w="30%">
      <Stack m="sm" gap="sm" align="center">
        <Center>
          <Title order={3} c={isCorrect ? 'green' : 'white'} style={{ textAlign: 'center' }}>
            {position} guardian
          </Title>
        </Center>
        <GuardianStack position={position} />
        <div className={classes.guardiansContainer}>
          {positions.map((g) => (
            <div className={`${classes.guardiansWrapper}`}>
              <GuardianButton position={position} guardian={g} />
            </div>
          ))}
        </div>
      </Stack>
    </Paper>
  );
}
