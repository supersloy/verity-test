import { Paper, Stack, Title, Group } from '@mantine/core';
import { range } from 'lodash';
import { useMemo } from 'react';
import { Position } from '@/store/types';
import { GuardianStackShape } from './GuardianStackShape';
import { useSolosStore } from '@/store/Solos/useSolosStore';
import { isStackCorrect } from '@/store/Solos/utils';

type GuardianStackProps = {
  position: Position;
};
export function GuardianStack({ position }: GuardianStackProps) {
  const stack = useSolosStore((state) => state.stack[position]);
  const isCorrect = useMemo(() => isStackCorrect(position), [stack, position]);

  return (
    <Paper withBorder w="100%">
      <Stack align="center" m="xs" gap="xs">
        <Title order={4} c={isCorrect ? 'green' : 'white'}>
          Stack
        </Title>
        <Group wrap="wrap" justify="space-evenly">
          <Group justify="space-evenly">
            {range(3).map((ind) => (
              <GuardianStackShape key={ind} index={ind} position={position} />
            ))}
          </Group>
          <Group justify="space-evenly">
            {range(3, 6).map((ind) => (
              <GuardianStackShape key={ind} index={ind} position={position} />
            ))}
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
}
