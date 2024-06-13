import { Center, Group, Paper, Stack, Title } from '@mantine/core';
import { Shape2DCard } from './Shape2DButton';
import { useMainCalloutStore } from '@/store/useMainCalloutStore';

export function MainCallout() {
  const { left, center, right } = useMainCalloutStore();

  return (
    <Center mt="lg">
      <Paper withBorder w="auto" display="inline-block">
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
