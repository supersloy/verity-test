import { Center, Group, Paper, Stack, Title } from '@mantine/core';
import { range } from 'lodash';
import { Position } from '@/store/types';
import { GuardianStackShape } from './GuardianStackShape';
import { GuardianButton } from './GuardianButton';
import { positions } from '@/store/utils';

type GuardianStackProps = {
  position: Position;
};
function GuardianStack({ position }: GuardianStackProps) {
  return (
    <Paper withBorder w="100%">
      <Stack align="center" m="xs" gap="xs">
        <Title order={4}>Stack</Title>
        <Group>
          {range(6).map((ind) => (
            <GuardianStackShape key={ind} index={ind} position={position} />
          ))}
        </Group>
      </Stack>
    </Paper>
  );
}

type SoloGuardianProps = {
  position: Position;
};

export function SoloGuardian({ position }: SoloGuardianProps) {
  return (
    <Paper withBorder display="inline-block" w="30%" miw="300">
      <Stack m="sm" gap="sm" align="center">
        <Center>
          <Title order={3}>{position} guardian</Title>
        </Center>
        <GuardianStack position={position} />
        <Group justify="space-between" w="75%">
          {positions.map((g) => (
            <GuardianButton position={position} guardian={g} />
          ))}
        </Group>
      </Stack>
    </Paper>
  );
}
