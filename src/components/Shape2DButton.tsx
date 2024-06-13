import { Paper, Stack, Text } from '@mantine/core';
import { Shape2D } from '@/store/types';
import { IconMapping } from '@/store/utils';

type Shape2DCardProps = {
  shape2D: Shape2D;
  disabled?: boolean;
};

export function Shape2DCard({ shape2D }: Shape2DCardProps) {
  const ShapeIcon = IconMapping[shape2D];
  return (
    <Paper withBorder w="5rem">
      <Stack w="100%" align="center" gap="0.5rem" m="0.5rem 0">
        <ShapeIcon style={{ width: '3rem', height: '3rem' }} />
        <Text>{shape2D}</Text>
      </Stack>
    </Paper>
  );
}
