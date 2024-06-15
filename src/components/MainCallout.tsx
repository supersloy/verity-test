import { Center, Group, Paper, Stack, Title } from '@mantine/core';
import { Shape2DCard } from './Shape2DButton';
import { useMainCalloutStore } from '@/store/useMainCalloutStore';

export function MainCallout() {
  const { Left: left, Center: center, Right: right } = useMainCalloutStore();

  return (
    <Center>
      <Paper withBorder w="300px" display="inline-block">
        <Stack gap={0} align="center">
          <Title>Main callouts</Title>
          <Group m="sm">
            <Shape2DCard shape2D={left} />
            <Shape2DCard shape2D={center} />
            <Shape2DCard shape2D={right} />
          </Group>
        </Stack>
      </Paper>
    </Center>
  );
}
