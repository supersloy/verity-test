import { Center, Group, Paper, Stack, Title } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import { ActionIcon } from './ActionIcon';
import { Position, Shape2D } from '@/store/types';
import { GuardianStackShape } from './GuardianStackShape';

const TEMP_EXAMPLE = ['Square', 'Triangle', undefined, undefined, undefined, undefined] as (
  | Shape2D
  | undefined
)[];

function GuardianStack() {
  return (
    <Paper withBorder w="100%">
      <Stack align="center" m="xs" gap="xs">
        <Title order={4}>Stack</Title>
        <Group>
          {TEMP_EXAMPLE.map((shape, ind) => (
            <GuardianStackShape key={ind} shape2D={shape} />
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
        <GuardianStack />
        <Group justify="space-between" w="75%">
          <ActionIcon size="xl" disabled={position === 'Left'}>
            <IconUser />
          </ActionIcon>
          <ActionIcon size="xl" mt="xl" disabled={position === 'Center'}>
            <IconUser />
          </ActionIcon>
          <ActionIcon size="xl" disabled={position === 'Right'}>
            <IconUser />
          </ActionIcon>
        </Group>
      </Stack>
    </Paper>
  );
}
